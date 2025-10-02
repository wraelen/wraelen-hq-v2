// src/app/extract/page.tsx – Extraction form (client-side for interactivity; binds server action – best hybrid for Next.js; protected via middleware)
'use client';  // Logic: Client (hooks for state/form – no SSR overhead; push back: Full server if no batch UX needed)

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';  // Dep not added yet? pnpm add react-hook-form @hookform/resolvers/zod (for zod integration)
import { z } from 'zod';  // Shared schema (client validation duplicates server for speed – prevents bad submits)
import { extractDataAction } from '@/lib/actions';  // Imported action

const extractSchema = z.object({  // Dupe from action (push back: Extract to shared util if bloat)
  links: z.string().min(1, 'Enter at least one link'),
  source: z.enum(['zillow', 'propstream', 'both']),
});  // Type: Infer for form
type FormData = z.infer<typeof extractSchema>;

export default function ExtractPage() {
  const [results, setResults] = useState<any[]>([]);  // Post-submit feedback (success/errors)
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(extractSchema),
    defaultValues: { source: 'zillow' },
  });

  const onSubmit = async (data: FormData) => {
    setError(null);
    setResults([]);
    const formData = new FormData();  // Logic: Native for action (though useForm has data – adaptable)
    formData.append('links', data.links);
    formData.append('source', data.source);
    const result = await extractDataAction(formData);  // Call action

    if (result.error) {
      setError('Validation failed: ' + JSON.stringify(result.error));  // Display zod
    } else {
      setResults(result.results || []);  // Show batch outcomes (e.g., "Lead X imported")
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-green-400 font-mono">
      <form onSubmit={handleSubmit(onSubmit)} className="p-8 border-2 border-green-500 rounded-lg shadow-[0_0_15px_rgba(0,255,0,0.7)] bg-black/80 w-96">
        <h2 className="text-2xl mb-6 text-center">Extract Leads Quest</h2>
        <textarea
          {...register('links')}
          placeholder="Enter Zillow/Propstream links (comma-separated for batch)"
          className="w-full mb-4 p-2 bg-black border border-green-500 text-green-400 focus:outline-none focus:border-green-300"
        />
        {errors.links && <p className="text-red-500 mb-4">{errors.links.message}</p>}
        <select {...register('source')} className="w-full mb-6 p-2 bg-black border border-green-500 text-green-400 focus:outline-none focus:border-green-300">
          <option value="zillow">Zillow</option>
          <option value="propstream">Propstream</option>
          <option value="both">Both</option>
        </select>
        <button type="submit" disabled={isSubmitting} className="w-full p-2 bg-green-500 text-black hover:bg-green-600">
          {isSubmitting ? 'Extracting...' : 'Start Extraction'}
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {results.length > 0 && (
          <ul className="mt-4">
            {results.map((res, i) => (
              <li key={i} className={res.success ? 'text-green-400' : 'text-red-500'}>
                {res.success ? `Lead ${res.leadId} imported!` : `Error on link: ${res.error}`}
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}