// src/app/calculator/page.tsx - Standalone Calculator Page
'use client';

import { Calculator as CalcIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CalculatorModal } from '@/components/ui/CalculatorModal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CalculatorPage() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Creative Offer Oven</h2>
        <p className="text-muted-foreground">
          Calculate seller financing deals and analyze profit potential
        </p>
      </div>

      <Card className="border-[#00A0E9]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalcIcon className="h-5 w-5 text-[#00A0E9]" />
            Quick Deal Calculator
          </CardTitle>
          <CardDescription>
            Run numbers on potential deals before making offers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Calculate</div>
              <ul className="text-sm space-y-1">
                <li>✓ Seller financing terms</li>
                <li>✓ Monthly cash flow</li>
                <li>✓ Cash-on-cash return</li>
                <li>✓ Profit spread analysis</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Features</div>
              <ul className="text-sm space-y-1">
                <li>✓ Pre-filled from leads</li>
                <li>✓ Save calculations</li>
                <li>✓ Generate PDF reports</li>
                <li>✓ Email to partners</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Analyze</div>
              <ul className="text-sm space-y-1">
                <li>✓ Deal score (0-100)</li>
                <li>✓ Operating expenses</li>
                <li>✓ Buyer vs seller terms</li>
                <li>✓ Net operating income</li>
              </ul>
            </div>
          </div>

          <div className="pt-4">
            <Button 
              size="lg" 
              className="w-full md:w-auto"
              onClick={() => setCalculatorOpen(true)}
            >
              <CalcIcon className="h-4 w-4 mr-2" />
              Open Calculator
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Tips */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">💡 Calculator Tips</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>
              <strong>Seller Financing Amount:</strong> Auto-calculates based on purchase price minus your down payment
            </p>
            <p>
              <strong>Interest Rate:</strong> Typically 1-2% below buyer rate for arbitrage profit
            </p>
            <p>
              <strong>Deal Score:</strong> 80+ is excellent, 60-79 is good, below 40 needs work
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">🎯 Using from Leads</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>
              Access the calculator from any lead in your leads table for automatic pre-filling of property data
            </p>
            <p>
              The calculator will pull in listing price, equity, and loan balance automatically
            </p>
            <p>
              Calculations are saved per-lead for easy reference and comparison
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Calculator Modal */}
      <CalculatorModal
        open={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
        onSave={async (data) => {
          console.log('Standalone calculation:', data);
          setCalculatorOpen(false);
        }}
      />
    </div>
  );
}