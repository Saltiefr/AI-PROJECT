import { pgTable, serial, integer, text, real, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { usersTable } from "./users";

export const predictionsTable = pgTable("predictions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => usersTable.id),
  riskLevel: text("risk_level").notNull(),
  probability: real("probability").notNull(),
  inputValues: jsonb("input_values").notNull(),
  recommendations: jsonb("recommendations").notNull(),
  normalRanges: jsonb("normal_ranges").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertPredictionSchema = createInsertSchema(predictionsTable).omit({ id: true, createdAt: true });
export type InsertPrediction = z.infer<typeof insertPredictionSchema>;
export type Prediction = typeof predictionsTable.$inferSelect;
