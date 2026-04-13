import { pgTable, serial, real, timestamp } from "drizzle-orm/pg-core";

export const modelInfoTable = pgTable("model_info", {
  id: serial("id").primaryKey(),
  accuracy: real("accuracy").notNull(),
  trainedAt: timestamp("trained_at").notNull().defaultNow(),
});

export type ModelInfo = typeof modelInfoTable.$inferSelect;
