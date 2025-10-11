// src/components/ui/CalculatorModal.tsx - Creative Offer Oven Calculator
'use client';

import { Calculator, Download, Mail, Save, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CalculatorData {
  // Property Details
  propertyAddress: string;
  listingPrice: number;
  equity: number;
  loanBalance: number;
  
  // Offer Details
  purchasePrice: number;
  downPayment: number;
  sellerFinancingAmount: number;
  interestRate: number;
  loanTerm: number; // years
  
  // Operating Expenses
  propertyTax: number;
  insurance: number;
  hoa: number;
  maintenance: number;
  
  // Revenue
  monthlyRent: number;
  
  // Buyer Terms
  buyerDownPayment: number;
  buyerInterestRate: number;
  buyerLoanTerm: number;
}

interface CalculatorModalProps {
  open: boolean;
  onClose: () => void;
  leadId?: string;
  initialData?: Partial<CalculatorData>;
  onSave?: (data: CalculatorData & { calculations: CalculationResults }) => Promise<void>;
}

interface CalculationResults {
  // Seller Side
  sellerMonthlyPayment: number;
  sellerTotalPayment: number;
  sellerTotalInterest: number;
  
  // Buyer Side
  buyerMonthlyPayment: number;
  buyerTotalPayment: number;
  buyerEntryFee: number;
  
  // Cash Flow Analysis
  monthlyOperatingExpenses: number;
  netOperatingIncome: number;
  monthlyCashFlow: number;
  annualCashFlow: number;
  cashOnCashReturn: number;
  
  // Deal Metrics
  profitSpread: number;
  dealScore: number;
}

export function CalculatorModal({ open, onClose, leadId, initialData, onSave }: CalculatorModalProps) {
  const [data, setData] = useState<CalculatorData>({
    propertyAddress: '',
    listingPrice: 0,
    equity: 0,
    loanBalance: 0,
    purchasePrice: 0,
    downPayment: 0,
    sellerFinancingAmount: 0,
    interestRate: 5.5,
    loanTerm: 30,
    propertyTax: 0,
    insurance: 0,
    hoa: 0,
    maintenance: 0,
    monthlyRent: 0,
    buyerDownPayment: 0,
    buyerInterestRate: 7.0,
    buyerLoanTerm: 30,
  });

  const [saving, setSaving] = useState(false);

  // Reset and populate data when modal opens or initialData changes
  useEffect(() => {
    if (open && initialData) {
      setData(prev => ({
        ...prev,
        ...initialData,
        // Pre-fill purchase price with listing price if available
        purchasePrice: initialData.listingPrice || prev.purchasePrice,
      }));
    } else if (!open) {
      // Reset to defaults when modal closes
      setData({
        propertyAddress: '',
        listingPrice: 0,
        equity: 0,
        loanBalance: 0,
        purchasePrice: 0,
        downPayment: 0,
        sellerFinancingAmount: 0,
        interestRate: 5.5,
        loanTerm: 30,
        propertyTax: 0,
        insurance: 0,
        hoa: 0,
        maintenance: 0,
        monthlyRent: 0,
        buyerDownPayment: 0,
        buyerInterestRate: 7.0,
        buyerLoanTerm: 30,
      });
    }
  }, [open, initialData]);

  // Calculate seller financing amount when purchase price or down payment changes
  useEffect(() => {
    const financingAmount = data.purchasePrice - data.downPayment;
    setData(prev => ({ ...prev, sellerFinancingAmount: Math.max(0, financingAmount) }));
  }, [data.purchasePrice, data.downPayment]);

  // FORMULAS FROM EXCEL - Monthly Payment Calculation
  const calculateMonthlyPayment = (principal: number, annualRate: number, years: number): number => {
    if (principal <= 0 || annualRate <= 0 || years <= 0) return 0;
    
    const monthlyRate = annualRate / 100 / 12;
    const numPayments = years * 12;
    
    // PMT formula: P * [r(1+r)^n] / [(1+r)^n - 1]
    const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                    (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    return payment;
  };

  // Calculate all results
  const calculateResults = (): CalculationResults => {
    // Seller's Monthly Payment (what YOU pay the seller)
    const sellerMonthlyPayment = calculateMonthlyPayment(
      data.sellerFinancingAmount,
      data.interestRate,
      data.loanTerm
    );
    
    const sellerTotalPayment = sellerMonthlyPayment * data.loanTerm * 12;
    const sellerTotalInterest = sellerTotalPayment - data.sellerFinancingAmount;
    
    // Buyer's Monthly Payment (what YOUR BUYER pays you)
    const buyerFinancingAmount = data.purchasePrice - data.buyerDownPayment;
    const buyerMonthlyPayment = calculateMonthlyPayment(
      buyerFinancingAmount,
      data.buyerInterestRate,
      data.buyerLoanTerm
    );
    
    const buyerTotalPayment = buyerMonthlyPayment * data.buyerLoanTerm * 12;
    const buyerEntryFee = data.buyerDownPayment;
    
    // Operating Expenses
    const monthlyOperatingExpenses = 
      data.propertyTax / 12 +
      data.insurance / 12 +
      data.hoa +
      data.maintenance;
    
    // Net Operating Income (Rent - Operating Expenses)
    const netOperatingIncome = data.monthlyRent - monthlyOperatingExpenses;
    
    // Monthly Cash Flow (NOI - Seller Payment + Buyer Payment)
    const monthlyCashFlow = netOperatingIncome - sellerMonthlyPayment + buyerMonthlyPayment;
    const annualCashFlow = monthlyCashFlow * 12;
    
    // Cash on Cash Return (Annual Cash Flow / Total Cash Invested)
    const totalCashInvested = data.downPayment + (data.buyerDownPayment > 0 ? 0 : data.downPayment);
    const cashOnCashReturn = totalCashInvested > 0 
      ? (annualCashFlow / totalCashInvested) * 100 
      : 0;
    
    // Profit Spread (Buyer Payment - Seller Payment)
    const profitSpread = buyerMonthlyPayment - sellerMonthlyPayment;
    
    // Deal Score (0-100, higher is better)
    let dealScore = 0;
    if (monthlyCashFlow > 0) dealScore += 30;
    if (cashOnCashReturn > 10) dealScore += 20;
    if (profitSpread > 200) dealScore += 25;
    if (data.interestRate < data.buyerInterestRate) dealScore += 25;
    
    return {
      sellerMonthlyPayment,
      sellerTotalPayment,
      sellerTotalInterest,
      buyerMonthlyPayment,
      buyerTotalPayment,
      buyerEntryFee,
      monthlyOperatingExpenses,
      netOperatingIncome,
      monthlyCashFlow,
      annualCashFlow,
      cashOnCashReturn,
      profitSpread,
      dealScore,
    };
  };

  const results = calculateResults();

  const handleSave = async () => {
    if (!onSave) return;
    
    setSaving(true);
    try {
      await onSave({ ...data, calculations: results });
      onClose();
    } catch (error) {
      console.error('Failed to save:', error);
    } finally {
      setSaving(false);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercent = (value: number) => {
    return `${value.toFixed(2)}%`;
  };

  const handleGeneratePDF = () => {
    // Dynamic import to avoid SSR issues
    import('jspdf').then(({ default: jsPDF }) => {
      const doc = new jsPDF();
      
      // Header
      doc.setFontSize(20);
      doc.setTextColor(0, 160, 233);
      doc.text('Creative Offer Analysis', 105, 20, { align: 'center' });
      
      doc.setFontSize(10);
      doc.setTextColor(100);
      doc.text(`Generated: ${new Date().toLocaleDateString()}`, 105, 27, { align: 'center' });
      
      // Property Details
      doc.setFontSize(14);
      doc.setTextColor(0);
      doc.text('Property Details', 14, 40);
      doc.setFontSize(10);
      doc.text(`Address: ${data.propertyAddress}`, 14, 48);
      doc.text(`Listing Price: ${formatCurrency(data.listingPrice)}`, 14, 54);
      doc.text(`Equity: ${formatCurrency(data.equity)}`, 14, 60);
      doc.text(`Loan Balance: ${formatCurrency(data.loanBalance)}`, 14, 66);
      
      // Offer Terms
      doc.setFontSize(14);
      doc.text('Your Offer Terms', 14, 80);
      doc.setFontSize(10);
      doc.text(`Purchase Price: ${formatCurrency(data.purchasePrice)}`, 14, 88);
      doc.text(`Down Payment: ${formatCurrency(data.downPayment)}`, 14, 94);
      doc.text(`Seller Financing: ${formatCurrency(data.sellerFinancingAmount)}`, 14, 100);
      doc.text(`Interest Rate: ${data.interestRate}%`, 14, 106);
      doc.text(`Loan Term: ${data.loanTerm} years`, 14, 112);
      
      // Key Results - Highlighted Box
      doc.setFillColor(0, 160, 233, 20);
      doc.rect(14, 125, 182, 50, 'F');
      doc.setFontSize(14);
      doc.setTextColor(0, 160, 233);
      doc.text('Deal Analysis', 20, 135);
      
      doc.setFontSize(11);
      doc.setTextColor(0);
      doc.text(`Monthly Profit Spread: ${formatCurrency(results.profitSpread)}`, 20, 145);
      doc.text(`Monthly Cash Flow: ${formatCurrency(results.monthlyCashFlow)}`, 20, 152);
      doc.text(`Annual Cash Flow: ${formatCurrency(results.annualCashFlow)}`, 20, 159);
      doc.text(`Cash-on-Cash Return: ${formatPercent(results.cashOnCashReturn)}`, 20, 166);
      doc.text(`Deal Score: ${results.dealScore}/100`, 20, 173);
      
      // Payment Breakdown
      doc.setFontSize(14);
      doc.setTextColor(0);
      doc.text('Payment Breakdown', 14, 190);
      doc.setFontSize(10);
      doc.text(`Your Payment to Seller: ${formatCurrency(results.sellerMonthlyPayment)}/month`, 14, 198);
      doc.text(`Buyer Payment to You: ${formatCurrency(results.buyerMonthlyPayment)}/month`, 14, 204);
      doc.text(`Monthly Spread: ${formatCurrency(results.profitSpread)}`, 14, 210);
      
      // Operating Expenses
      doc.setFontSize(14);
      doc.text('Operating Expenses', 14, 225);
      doc.setFontSize(10);
      doc.text(`Property Tax: ${formatCurrency(data.propertyTax)}/year`, 14, 233);
      doc.text(`Insurance: ${formatCurrency(data.insurance)}/year`, 14, 239);
      doc.text(`HOA: ${formatCurrency(data.hoa)}/month`, 14, 245);
      doc.text(`Maintenance: ${formatCurrency(data.maintenance)}/month`, 14, 251);
      doc.text(`Total Monthly Expenses: ${formatCurrency(results.monthlyOperatingExpenses)}`, 14, 257);
      
      // Footer
      doc.setFontSize(8);
      doc.setTextColor(150);
      doc.text('Wraelen HQ - Creative Offer Analysis', 105, 285, { align: 'center' });
      
      // Save PDF
      doc.save(`offer-analysis-${data.propertyAddress.replace(/[^a-zA-Z0-9]/g, '-')}.pdf`);
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-[#00A0E9]" />
            Creative Offer Oven
          </DialogTitle>
          <DialogDescription>
            Calculate seller financing deals with precision
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="input" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="input">📝 Input</TabsTrigger>
            <TabsTrigger value="results">📊 Results</TabsTrigger>
            <TabsTrigger value="analysis">🎯 Analysis</TabsTrigger>
          </TabsList>

          {/* INPUT TAB */}
          <TabsContent value="input" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Property Details</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Property Address</Label>
                  <Input
                    value={data.propertyAddress}
                    onChange={(e) => setData({ ...data, propertyAddress: e.target.value })}
                    placeholder="123 Main St, City, ST"
                  />
                </div>
                <div>
                  <Label>Listing Price</Label>
                  <Input
                    type="number"
                    value={data.listingPrice || ''}
                    onChange={(e) => setData({ ...data, listingPrice: parseFloat(e.target.value) || 0 })}
                    placeholder="300000"
                  />
                </div>
                <div>
                  <Label>Equity</Label>
                  <Input
                    type="number"
                    value={data.equity || ''}
                    onChange={(e) => setData({ ...data, equity: parseFloat(e.target.value) || 0 })}
                    placeholder="150000"
                  />
                </div>
                <div>
                  <Label>Loan Balance</Label>
                  <Input
                    type="number"
                    value={data.loanBalance || ''}
                    onChange={(e) => setData({ ...data, loanBalance: parseFloat(e.target.value) || 0 })}
                    placeholder="150000"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Offer to Seller</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Purchase Price</Label>
                  <Input
                    type="number"
                    value={data.purchasePrice || ''}
                    onChange={(e) => setData({ ...data, purchasePrice: parseFloat(e.target.value) || 0 })}
                    placeholder="280000"
                  />
                </div>
                <div>
                  <Label>Down Payment</Label>
                  <Input
                    type="number"
                    value={data.downPayment || ''}
                    onChange={(e) => setData({ ...data, downPayment: parseFloat(e.target.value) || 0 })}
                    placeholder="30000"
                  />
                </div>
                <div>
                  <Label>Seller Financing Amount</Label>
                  <Input
                    type="number"
                    value={data.sellerFinancingAmount}
                    disabled
                    className="bg-muted"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Auto-calculated</p>
                </div>
                <div>
                  <Label>Interest Rate (%)</Label>
                  <Input
                    type="number"
                    step="0.1"
                    value={data.interestRate || ''}
                    onChange={(e) => setData({ ...data, interestRate: parseFloat(e.target.value) || 0 })}
                    placeholder="5.5"
                  />
                </div>
                <div>
                  <Label>Loan Term (years)</Label>
                  <Input
                    type="number"
                    value={data.loanTerm || ''}
                    onChange={(e) => setData({ ...data, loanTerm: parseInt(e.target.value) || 0 })}
                    placeholder="30"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Operating Expenses</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Property Tax (Annual)</Label>
                  <Input
                    type="number"
                    value={data.propertyTax || ''}
                    onChange={(e) => setData({ ...data, propertyTax: parseFloat(e.target.value) || 0 })}
                    placeholder="3600"
                  />
                </div>
                <div>
                  <Label>Insurance (Annual)</Label>
                  <Input
                    type="number"
                    value={data.insurance || ''}
                    onChange={(e) => setData({ ...data, insurance: parseFloat(e.target.value) || 0 })}
                    placeholder="1200"
                  />
                </div>
                <div>
                  <Label>HOA (Monthly)</Label>
                  <Input
                    type="number"
                    value={data.hoa || ''}
                    onChange={(e) => setData({ ...data, hoa: parseFloat(e.target.value) || 0 })}
                    placeholder="150"
                  />
                </div>
                <div>
                  <Label>Maintenance (Monthly)</Label>
                  <Input
                    type="number"
                    value={data.maintenance || ''}
                    onChange={(e) => setData({ ...data, maintenance: parseFloat(e.target.value) || 0 })}
                    placeholder="200"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue & Buyer Terms</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Monthly Rent</Label>
                  <Input
                    type="number"
                    value={data.monthlyRent || ''}
                    onChange={(e) => setData({ ...data, monthlyRent: parseFloat(e.target.value) || 0 })}
                    placeholder="2500"
                  />
                </div>
                <div>
                  <Label>Buyer Down Payment</Label>
                  <Input
                    type="number"
                    value={data.buyerDownPayment || ''}
                    onChange={(e) => setData({ ...data, buyerDownPayment: parseFloat(e.target.value) || 0 })}
                    placeholder="40000"
                  />
                </div>
                <div>
                  <Label>Buyer Interest Rate (%)</Label>
                  <Input
                    type="number"
                    step="0.1"
                    value={data.buyerInterestRate || ''}
                    onChange={(e) => setData({ ...data, buyerInterestRate: parseFloat(e.target.value) || 0 })}
                    placeholder="7.0"
                  />
                </div>
                <div>
                  <Label>Buyer Loan Term (years)</Label>
                  <Input
                    type="number"
                    value={data.buyerLoanTerm || ''}
                    onChange={(e) => setData({ ...data, buyerLoanTerm: parseInt(e.target.value) || 0 })}
                    placeholder="30"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* RESULTS TAB */}
          <TabsContent value="results" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Seller Side (What You Pay)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Monthly Payment:</span>
                    <span className="font-semibold">{formatCurrency(results.sellerMonthlyPayment)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Payment:</span>
                    <span className="font-semibold">{formatCurrency(results.sellerTotalPayment)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Interest:</span>
                    <span className="font-semibold text-orange-600">{formatCurrency(results.sellerTotalInterest)}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Buyer Side (What They Pay You)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Monthly Payment:</span>
                    <span className="font-semibold">{formatCurrency(results.buyerMonthlyPayment)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Payment:</span>
                    <span className="font-semibold">{formatCurrency(results.buyerTotalPayment)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Entry Fee:</span>
                    <span className="font-semibold text-green-600">{formatCurrency(results.buyerEntryFee)}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cash Flow Analysis</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Monthly Rent:</span>
                  <span className="font-semibold">{formatCurrency(data.monthlyRent)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Operating Expenses:</span>
                  <span className="font-semibold text-red-600">-{formatCurrency(results.monthlyOperatingExpenses)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Net Operating Income:</span>
                  <span className="font-semibold">{formatCurrency(results.netOperatingIncome)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Monthly Cash Flow:</span>
                  <span className={`font-semibold ${results.monthlyCashFlow > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {formatCurrency(results.monthlyCashFlow)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Annual Cash Flow:</span>
                  <span className={`font-semibold ${results.annualCashFlow > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {formatCurrency(results.annualCashFlow)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Cash-on-Cash Return:</span>
                  <span className="font-semibold text-[#00A0E9]">{formatPercent(results.cashOnCashReturn)}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#00A0E9]">
              <CardHeader>
                <CardTitle className="text-lg text-[#00A0E9]">💰 The Spread (Your Profit)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-lg">Monthly Profit Spread:</span>
                  <span className="text-3xl font-bold text-[#00A0E9]">
                    {formatCurrency(results.profitSpread)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  (Buyer Payment - Seller Payment)
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ANALYSIS TAB */}
          <TabsContent value="analysis" className="space-y-4">
            <Card className="border-2 border-[#00A0E9]">
              <CardHeader>
                <CardTitle>Deal Score: {results.dealScore}/100</CardTitle>
                <CardDescription>
                  {results.dealScore >= 80 && '🔥 Excellent Deal!'}
                  {results.dealScore >= 60 && results.dealScore < 80 && '✅ Good Deal'}
                  {results.dealScore >= 40 && results.dealScore < 60 && '⚠️ Fair Deal'}
                  {results.dealScore < 40 && '❌ Needs Work'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Positive Cash Flow:</span>
                    <span>{results.monthlyCashFlow > 0 ? '✅ Yes (+30 pts)' : '❌ No'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Strong CoC Return (&gt;10%):</span>
                    <span>{results.cashOnCashReturn > 10 ? '✅ Yes (+20 pts)' : '❌ No'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Good Profit Spread (&gt;$200/mo):</span>
                    <span>{results.profitSpread > 200 ? '✅ Yes (+25 pts)' : '❌ No'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Interest Rate Arbitrage:</span>
                    <span>{data.interestRate < data.buyerInterestRate ? '✅ Yes (+25 pts)' : '❌ No'}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Metrics Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Purchase Price</p>
                    <p className="text-xl font-bold">{formatCurrency(data.purchasePrice)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Down Payment</p>
                    <p className="text-xl font-bold">{formatCurrency(data.downPayment)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Monthly Spread</p>
                    <p className="text-xl font-bold text-[#00A0E9]">{formatCurrency(results.profitSpread)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">CoC Return</p>
                    <p className="text-xl font-bold text-green-600">{formatPercent(results.cashOnCashReturn)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between items-center pt-4 border-t">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleGeneratePDF}>
              <Download className="h-4 w-4 mr-2" />
              PDF
            </Button>
            <Button variant="outline" size="sm">
              <Mail className="h-4 w-4 mr-2" />
              Email
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={saving}>
              <Save className="h-4 w-4 mr-2" />
              {saving ? 'Saving...' : 'Save Calculation'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}