'use client'; // Logic: Client for interactivity (dropzone, form state)
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone'; // Logic: Drag-drop (gamified UX – better than plain input)
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { importDataAction } from '@/lib/actions'; // Updated action

const importSchema = z.object({ source: z.literal('propstream') });
type FormData = z.infer<typeof importSchema>;

export default function ExtractPage() { // Renamed to ImportPage? But keep for now
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null); // Logic: Hold uploaded file
  const { handleSubmit, formState: { isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(importSchema),
    defaultValues: { source: 'propstream' },
  });

  const onSubmit = async () => {
    setError(null);
    setResults([]);
    if (!file) {
      setError('Upload a Propstream CSV first');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('source', 'propstream');
    const result = await importDataAction(formData);

    if (result.error) {
      setError('Import failed: ' + JSON.stringify(result.error));
    } else {
      setResults(result.results || []);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'text/csv': ['.csv'] },
    onDrop: (acceptedFiles) => setFile(acceptedFiles[0] || null), // Logic: Take first file
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-green-400 font-mono">
      <form onSubmit={handleSubmit(onSubmit)} className="p-8 border-2 border-green-500 rounded-lg shadow-[0_0_15px_rgba(0,255,0,0.7)] bg-black/80 w-96">
        <h2 className="text-2xl mb-6 text-center">Import Leads Quest (Propstream CSV)</h2>
        <div {...getRootProps()} className="w-full mb-4 p-4 bg-black border border-dashed border-green-500 text-center cursor-pointer">
          <input {...getInputProps()} />
          <p>{file ? file.name : 'Drag-drop CSV or click to upload'}</p>
        </div>
        <button type="submit" disabled={isSubmitting || !file} className="w-full p-2 bg-green-500 text-black hover:bg-green-600">
          {isSubmitting ? 'Importing...' : 'Start Import'}
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {results.length > 0 && (
          <ul className="mt-4 max-h-40 overflow-y-auto">
            {results.map((res, i) => (
              <li key={i} className={res.success ? 'text-green-400' : 'text-red-500'}>
                {res.success ? `Row ${res.row} imported (Lead ${res.leadId})` : `Error on row ${res.row}: ${res.error}`}
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}