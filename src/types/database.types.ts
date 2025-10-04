// src/types/database.types.ts – Generated Supabase types (updated to match current Prisma schema; best practice: Run `supabase gen types typescript --local > src/types/database.types.ts` after DB changes to auto-sync; manually fixed here for lowercase models/enums/fields to align with Prisma conventions and avoid mismatches)
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      properties: {
        Row: {
          id: string
          address: string
          city: string
          state: string
          zip_code: string
          property_type: Database["public"]["Enums"]["PropertyType"] | null
          bedrooms: number | null
          bathrooms: number | null
          square_feet: number | null
          lot_size: number | null
          year_built: number | null
          zestimate: number | null
          avm: number | null
          market_value: number | null
          tax_assessed_value: number | null
          distress_signals: Json | null
          owner_occupied: boolean | null
          notes: string | null
          address_hash: string
          metadata: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          address: string
          city: string
          state: string
          zip_code: string
          property_type?: Database["public"]["Enums"]["PropertyType"] | null
          bedrooms?: number | null
          bathrooms?: number | null
          square_feet?: number | null
          lot_size?: number | null
          year_built?: number | null
          zestimate?: number | null
          avm?: number | null
          market_value?: number | null
          tax_assessed_value?: number | null
          distress_signals?: Json | null
          owner_occupied?: boolean | null
          notes?: string | null
          address_hash: string
          metadata?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          address?: string
          city?: string
          state?: string
          zip_code?: string
          property_type?: Database["public"]["Enums"]["PropertyType"] | null
          bedrooms?: number | null
          bathrooms?: number | null
          square_feet?: number | null
          lot_size?: number | null
          year_built?: number | null
          zestimate?: number | null
          avm?: number | null
          market_value?: number | null
          tax_assessed_value?: number | null
          distress_signals?: Json | null
          owner_occupied?: boolean | null
          notes?: string | null
          address_hash?: string
          metadata?: Json | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      leads: {
        Row: {
          id: string
          properties_id: string
          lead_type: Database["public"]["Enums"]["LeadType"] | null
          first_name: string | null
          last_name: string | null
          phone: string | null
          email: string | null
          status: Database["public"]["Enums"]["LeadStatus"]
          source: Database["public"]["Enums"]["LeadSource"] | null
          assigned_to: string | null
          points_earned: number
          metadata: Json | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          properties_id: string
          lead_type?: Database["public"]["Enums"]["LeadType"] | null
          first_name?: string | null
          last_name?: string | null
          phone?: string | null
          email?: string | null
          status?: Database["public"]["Enums"]["LeadStatus"]
          source?: Database["public"]["Enums"]["LeadSource"] | null
          assigned_to?: string | null
          points_earned?: number
          metadata?: Json | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          properties_id?: string
          lead_type?: Database["public"]["Enums"]["LeadType"] | null
          first_name?: string | null
          last_name?: string | null
          phone?: string | null
          email?: string | null
          status?: Database["public"]["Enums"]["LeadStatus"]
          source?: Database["public"]["Enums"]["LeadSource"] | null
          assigned_to?: string | null
          points_earned?: number
          metadata?: Json | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "leads_properties_id_fkey"
            columns: ["properties_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          }
        ]
      }
      calls: {
        Row: {
          id: string
          leads_id: string
          caller_id: string
          call_sid: string | null
          direction: Database["public"]["Enums"]["CallDirection"]
          status: string | null
          duration: number | null
          outcome: Database["public"]["Enums"]["CallOutcome"] | null
          points_earned: number
          metadata: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          leads_id: string
          caller_id: string
          call_sid?: string | null
          direction?: Database["public"]["Enums"]["CallDirection"]
          status?: string | null
          duration?: number | null
          outcome?: Database["public"]["Enums"]["CallOutcome"] | null
          points_earned?: number
          metadata?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          leads_id?: string
          caller_id?: string
          call_sid?: string | null
          direction?: Database["public"]["Enums"]["CallDirection"]
          status?: string | null
          duration?: number | null
          outcome?: Database["public"]["Enums"]["CallOutcome"] | null
          points_earned?: number
          metadata?: Json | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "calls_leads_id_fkey"
            columns: ["leads_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calls_caller_id_fkey"
            columns: ["caller_id"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          }
        ]
      }
      profile: {
        Row: {
          id: string
          user_id: string
          role: Database["public"]["Enums"]["UserRole"]
          points: number
          badges: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          user_id: string
          role?: Database["public"]["Enums"]["UserRole"]
          points?: number
          badges?: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          role?: Database["public"]["Enums"]["UserRole"]
          points?: number
          badges?: string[]
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      Quest: {
        Row: {
          id: string
          title: string
          description: string | null
          type: Database["public"]["Enums"]["QuestType"]
          points: number
          criteria: Json | null
          active: boolean
          profile_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          type: Database["public"]["Enums"]["QuestType"]
          points: number
          criteria?: Json | null
          active?: boolean
          profile_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          type?: Database["public"]["Enums"]["QuestType"]
          points?: number
          criteria?: Json | null
          active?: boolean
          profile_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "Quest_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          }
        ]
      }
      quest_completions: {
        Row: {
          id: string
          quest_id: string
          profile_id: string
          completed_at: string
          evidence: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          quest_id: string
          profile_id: string
          completed_at?: string
          evidence?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          quest_id?: string
          profile_id?: string
          completed_at?: string
          evidence?: Json | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "quest_completions_quest_id_fkey"
            columns: ["quest_id"]
            isOneToOne: false
            referencedRelation: "Quest"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quest_completions_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          }
        ]
      }
      badges: {
        Row: {
          id: string
          name: string
          description: string
          icon_url: string | null
          requirements: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          icon_url?: string | null
          requirements?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          icon_url?: string | null
          requirements?: Json | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      call_metrics: {
        Row: {
          lead_id: string | null
          total_calls: number | null
          total_outbound_calls: number | null
          total_duration: number | null
          average_duration: number | null
          total_connected_calls: number | null
          total_voicemails: number | null
          total_no_answers: number | null
          last_call_timestamp: string | null
          last_call_outcome: Database["public"]["Enums"]["CallOutcome"] | null
          call_success_rate: number | null
          points_earned: number | null
        }
        Relationships: [
          {
            foreignKeyName: "calls_leads_id_fkey"  // Example; adjust if view has FKs
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      PropertyType: "single_family" | "multi_family" | "condo" | "townhouse" | "land" | "commercial" | "other"
      LeadType: "realtor" | "owner" | "investor" | "other"
      LeadStatus: "new" | "contacted" | "no_answer" | "appointment_set" | "contract_signed" | "closed" | "disqualified" | "follow_up" | "other"
      LeadSource: "scrape" | "referral" | "other" | "zillow_api" | "propstream_import"
      CallDirection: "inbound" | "outbound"
      CallOutcome: "connected" | "voicemail" | "no_answer" | "disqualified" | "appointment_set" | "other"
      UserRole: "novice" | "apprentice" | "journeyman" | "master" | "elite" | "manager" | "admin"
      QuestType: "daily" | "weekly" | "one_time"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const