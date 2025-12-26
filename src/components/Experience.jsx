import React from "react";

const Experience = () => {
  return (
    <section className="flex flex-col gap-4 text-zinc-800 dark:text-cyan-50 max-w-[80%] m-auto mt-12 ">
      <h1 className="md:flex md:justify-start text-4xl font-bold items-start">
        Experience
      </h1>
      <div className="flex flex-col xl:flex-row xl:justify-between font-bold text-slate-700 dark:text-cyan-50 text-lg">
        <span>
          Analyst - Payroll Data Reconciliation (Legacy to Oracle Fusion
          Migration)
        </span>
        <span>September 2024 – October 2025</span>
      </div>
      <div className="flex flex-col items-center xl:flex-row xl:justify-between font-bold text-slate-700 dark:text-cyan-50 text-lg">
        <span className="text-left">Deloitte</span>
        <span className="text-right">Bengaluru, Karnataka</span>
      </div>
      <ul className="flex flex-col text-justify list-disc">
        <li>
          Developed and optimized PL/SQL queries to extract, compare, and
          validate payroll data between legacy systems (PeopleSoft) and Oracle
          Fusion, ensuring data consistency during system migration.
        </li>
        <li>
          Collaborated with cross-functional teams to iterate through multiple
          reconciliation cycles, each with increasing match thresholds (90%,
          95%, etc.), ensuring data integrity before go-live.
        </li>
        <li>
          Achieved a 30% reduction in data comparison time by restructuring
          query logic, and indexing key tables, contributing to quicker
          threshold achievement and system migration timelines.
        </li>
        <li>
          Built interactive dashboards and analytical reports to visualize
          reconciliation metrics (match rates, variances by element
          classifications such as earnings and deductions) using SQL queries.
        </li>
        <li>
          Gained hands-on experience working with large-scale enterprise
          datasets, improving query performance and understanding of data-driven
          decision-making.
        </li>
      </ul>
    </section>
  );
};

export default Experience;
