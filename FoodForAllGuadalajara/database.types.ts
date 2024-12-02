export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      apadrinar: {
        Row: {
          created_at: string
          id: number
          nombre: string | null
          persona_a_apadrinar: number | null
          telefono: string | null
          tipo_despensa: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          nombre?: string | null
          persona_a_apadrinar?: number | null
          telefono?: string | null
          tipo_despensa?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          nombre?: string | null
          persona_a_apadrinar?: number | null
          telefono?: string | null
          tipo_despensa?: number | null
        }
        Relationships: []
      }
      beneficiarios: {
        Row: {
          created_at: string
          edad: number | null
          id: number
          nombre_completo: string | null
        }
        Insert: {
          created_at?: string
          edad?: number | null
          id?: number
          nombre_completo?: string | null
        }
        Update: {
          created_at?: string
          edad?: number | null
          id?: number
          nombre_completo?: string | null
        }
        Relationships: []
      }
      despensas: {
        Row: {
          created_at: string
          despensa: string | null
          id: number
        }
        Insert: {
          created_at?: string
          despensa?: string | null
          id?: number
        }
        Update: {
          created_at?: string
          despensa?: string | null
          id?: number
        }
        Relationships: []
      }
      Eventos: {
        Row: {
          created_at: string
          date: string | null
          id: number
          image: string | null
          place: string | null
          time: string | null
          title: string | null
        }
        Insert: {
          created_at?: string
          date?: string | null
          id?: number
          image?: string | null
          place?: string | null
          time?: string | null
          title?: string | null
        }
        Update: {
          created_at?: string
          date?: string | null
          id?: number
          image?: string | null
          place?: string | null
          time?: string | null
          title?: string | null
        }
        Relationships: []
      }
      Recetas: {
        Row: {
          category: string | null
          created_at: string
          dificulty: string | null
          id: number
          image: string | null
          ingredients: Json[] | null
          name: string | null
          procedure: string | null
          setps: number | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          dificulty?: string | null
          id?: number
          image?: string | null
          ingredients?: Json[] | null
          name?: string | null
          procedure?: string | null
          setps?: number | null
        }
        Update: {
          category?: string | null
          created_at?: string
          dificulty?: string | null
          id?: number
          image?: string | null
          ingredients?: Json[] | null
          name?: string | null
          procedure?: string | null
          setps?: number | null
        }
        Relationships: []
      }
      Recetas2: {
        Row: {
          categoria: string | null
          created_at: string
          foto: string | null
          id: number
          ingredientes: Json | null
          nivel_dificultad: string | null
          nombre_receta: string | null
          procedimiento: Json | null
          subtitulo: string | null
          tiempo_preparacion: string | null
        }
        Insert: {
          categoria?: string | null
          created_at?: string
          foto?: string | null
          id?: number
          ingredientes?: Json | null
          nivel_dificultad?: string | null
          nombre_receta?: string | null
          procedimiento?: Json | null
          subtitulo?: string | null
          tiempo_preparacion?: string | null
        }
        Update: {
          categoria?: string | null
          created_at?: string
          foto?: string | null
          id?: number
          ingredientes?: Json | null
          nivel_dificultad?: string | null
          nombre_receta?: string | null
          procedimiento?: Json | null
          subtitulo?: string | null
          tiempo_preparacion?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
