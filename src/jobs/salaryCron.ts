import cron from "node-cron";
import { autoIncrementIncome } from "../controller/incomes.controller";


export const startSalaryCron = () => {
  console.log("Initializing salary auto-increment cron job...");

  cron.schedule(
    "0 0 1 * *", 
    async () => {
      console.log("Running salary auto-increment cron job...");

      try {
        await autoIncrementIncome();
        console.log("Salary auto-increment completed successfully");
      } catch (error) {
        console.error("Error in salary auto-increment cron:", error);
      }
    },
    {
      timezone: "Asia/Colombo",
    }
  );

  console.log(" Salary auto-increment cron job scheduled (every 1st day of the month at midnight)");
};
