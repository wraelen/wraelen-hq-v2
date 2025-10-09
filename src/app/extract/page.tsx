// src/app/extract/page.tsx - With progress polling
'use client';

import { FileUp, Loader2, Sparkles, Trash2, Upload, X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getImportHistory, getImportJobStatus, importCSVAction, undoImportAction } from '@/lib/actions';

type ImportBatch = {
  id: string;
  filename: string | null;
  total_rows: number;
  successful_rows: number;
  failed_rows: number;
  points_earned: number;
  created_at: string;
};

export default function ExtractPage() {
  const [file, setFile] = useState<File | null>(null);
  const [importing, setImporting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [importMessage, setImportMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [showQuestPopup, setShowQuestPopup] = useState(false);
  const [questCompleted, setQuestCompleted] = useState<string | null>(null);
  const [history, setHistory] = useState<ImportBatch[]>([]);
  const [deletingBatchId, setDeletingBatchId] = useState<string | null>(null);
  const [currentJobId, setCurrentJobId] = useState<string | null>(null);

  useEffect(() => {
    loadHistory();
  }, []);

  // Polling effect for job progress
  useEffect(() => {
    if (!currentJobId || !importing) return;

    const pollInterval = setInterval(async () => {
      try {
        const status = await getImportJobStatus(currentJobId);
        
        if ('error' in status) {
          console.error('Job status error:', status.error);
          clearInterval(pollInterval);
          setImporting(false);
          setError(status.error);
          return;
        }

        setProgress(status.progress || 0);
        setImportMessage(status.message || '');

        // Job completed
        if (status.status === 'completed') {
          clearInterval(pollInterval);
          setImporting(false);
          setProgress(100);
          setImportMessage('✨ Import quest complete!');
          
          // Reload history after completion
          setTimeout(() => {
            loadHistory();
            setFile(null);
            setProgress(0);
            setImportMessage('');
            setCurrentJobId(null);
          }, 2000);
        }

        // Job failed
        if (status.status === 'failed') {
          clearInterval(pollInterval);
          setImporting(false);
          setError('Import job failed');
          setCurrentJobId(null);
        }
      } catch (err) {
        console.error('Polling error:', err);
        clearInterval(pollInterval);
        setImporting(false);
        setError('Failed to check import status');
      }
    }, 1500); // Poll every 1.5 seconds

    return () => clearInterval(pollInterval);
  }, [currentJobId, importing]);

  const loadHistory = async () => {
    try {
      const data = await getImportHistory();
      setHistory(data);
    } catch (err) {
      console.error('Failed to load history:', err);
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setError(null);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'text/csv': ['.csv'] },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024,
  });

  const handleImport = async () => {
    if (!file) return;

    setImporting(true);
    setError(null);
    setProgress(0);
    setImportMessage('⚔️ Preparing import quest...');

    try {
      const formData = new FormData();
      formData.append('file', file);

      // Call the import action
      const result = await importCSVAction(formData);

      if ('error' in result) {
        setError(result.error);
        setImportMessage('❌ Quest failed!');
        setImporting(false);
        return;
      }

      // Start polling for progress
      setCurrentJobId(result.jobId);
      setImportMessage('📜 Processing CSV...');

      // Check for quest completion
      if (result.questCompleted) {
        setQuestCompleted(result.questCompleted);
        setShowQuestPopup(true);
      }

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Import failed');
      setImportMessage('❌ Quest failed!');
      setImporting(false);
    }
  };

  const handleUndo = async (batchId: string) => {
    if (!confirm('⚠️ Undo this import? This will delete all leads and properties from this batch.')) {
      return;
    }

    setDeletingBatchId(batchId);
    try {
      await undoImportAction(batchId);
      await loadHistory();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Undo failed');
    } finally {
      setDeletingBatchId(null);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Extract</h2>
        <p className="text-muted-foreground">
          Import leads from Propstream CSV files
        </p>
      </div>

      {/* Quest Completion Popup */}
      {showQuestPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <Card className="border-2 border-[#00A0E9] shadow-[0_0_30px_rgba(0,160,233,0.5)] max-w-md">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#00A0E9] animate-pulse">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">🎉 Quest Complete!</CardTitle>
              <CardDescription className="text-base">
                {questCompleted}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Visit the <span className="text-[#00A0E9] font-semibold">Achievement Gallery</span> to collect your reward!
              </p>
              <Button
                onClick={() => {
                  setShowQuestPopup(false);
                  setQuestCompleted(null);
                }}
                className="w-full"
              >
                Awesome!
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Import Card */}
      <Card>
        <CardHeader>
          <CardTitle>Import Leads Quest</CardTitle>
          <CardDescription>
            Upload a Propstream CSV to extract properties and discover listing agents
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!file ? (
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-all cursor-pointer ${
                isDragActive
                  ? 'border-[#00A0E9] bg-[#00A0E9]/5'
                  : 'border-muted-foreground/25 hover:border-[#00A0E9]/50'
              }`}
            >
              <input {...getInputProps()} />
              <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">
                {isDragActive ? 'Drop the CSV here' : 'Drag & Drop CSV Here'}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                or click to browse files
              </p>
              <Button variant="outline" disabled={importing}>
                <FileUp className="mr-2 h-4 w-4" />
                Select File
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Maximum 10MB • .csv files only
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <FileUp className="h-5 w-5 text-[#00A0E9]" />
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(file.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setFile(null)}
                  disabled={importing}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {importing && (
                <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin text-[#00A0E9]" />
                    <p className="text-sm font-medium">{importMessage}</p>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <Progress value={progress} className="h-2" />
                    <p className="text-xs text-center text-muted-foreground">
                      {progress}% complete
                    </p>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    Scraping Realtor.com for agent data... This may take several minutes!
                  </p>
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-sm text-red-500">{error}</p>
                </div>
              )}

              <div className="flex gap-2">
                <Button
                  onClick={handleImport}
                  disabled={importing}
                  className="flex-1"
                >
                  {importing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Importing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Start Import Quest
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setFile(null)}
                  disabled={importing}
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}

          <div className="p-4 bg-muted/50 rounded-lg">
            <h4 className="text-sm font-semibold mb-2">⚔️ Quest Objectives:</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Properties extracted with financial metrics</li>
              <li>Owner contact information captured</li>
              <li>Listing agents discovered via Realtor.com</li>
              <li>Leads assigned to you automatically</li>
              <li>+1 XP (point) per successful lead</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Import History */}
      <Card>
        <CardHeader>
          <CardTitle>Import History</CardTitle>
          <CardDescription>Your previous import quests</CardDescription>
        </CardHeader>
        <CardContent>
          {history.length > 0 ? (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Filename</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Success</TableHead>
                    <TableHead>Failed</TableHead>
                    <TableHead>Points</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {history.map((batch) => (
                    <TableRow key={batch.id}>
                      <TableCell className="text-sm text-muted-foreground">
                        {new Date(batch.created_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </TableCell>
                      <TableCell className="font-medium">
                        {batch.filename || 'Unknown'}
                      </TableCell>
                      <TableCell>{batch.total_rows}</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500/10 text-green-500">
                          {batch.successful_rows}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {batch.failed_rows > 0 && (
                          <Badge className="bg-red-500/10 text-red-500">
                            {batch.failed_rows}
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="font-medium text-[#00A0E9]">
                        +{batch.points_earned}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleUndo(batch.id)}
                          disabled={deletingBatchId === batch.id}
                        >
                          {deletingBatchId === batch.id ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Trash2 className="h-4 w-4" />
                          )}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <FileUp className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg mb-2">No import history</p>
              <p className="text-sm">
                Complete your first import quest to see history here
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}