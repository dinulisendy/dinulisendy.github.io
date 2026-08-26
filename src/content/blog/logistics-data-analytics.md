---
title: "Using Data Analytics to Optimise Logistics Operations: Lessons from the Field"
description: "How data-driven approaches—from inventory monitoring systems to container repositioning models—are transforming logistics efficiency in emerging markets."
pubDate: 2026-08-10
tags: ["Logistics", "Data Analytics", "Operations Research", "Transport Engineering"]
featured: true
---

The logistics sector in South Asia is at a fascinating inflection point. On one hand, infrastructure investment is accelerating — new expressways, port expansions, and dry-port developments are reshaping freight corridors. On the other hand, the operational layer beneath this infrastructure remains surprisingly analogue in many organisations.

Over the past year, I've had the opportunity to work on two projects that sit right at this intersection: a **Pharmacy Inventory Monitoring & Optimisation System** and an **Empty Container Optimisation model** for a container shipping context. Both have taught me that the gap between data availability and data *use* is often the single biggest driver of operational inefficiency.

## The Inventory Problem is a Demand Forecasting Problem

When we first approached the pharmacy inventory project, the brief seemed simple: reduce stockouts and over-purchasing. But as we mapped the existing process, it became clear that the root cause was upstream — demand forecasting was being done manually, informed primarily by a procurement officer's experience and gut feel.

This is common across healthcare supply chains in the region. The data exists — purchase histories, consumption logs, seasonal patterns — but it sits in disconnected spreadsheets, if it's captured at all.

Our system addressed this by:

1. **Centralising SKU-level consumption data** into a structured database with automated daily ingestion
2. **Building a moving-average forecast model** with manual override capability (important for maintaining clinical staff trust in the system)
3. **Setting dynamic reorder points** based on lead time variability, not just average lead time
4. **Configuring automated alerts** for both stockout risk and excess inventory — the latter is often ignored, but ties up working capital and creates expiry risk

The result was a measurable reduction in emergency procurement events and a significant drop in expired stock write-offs within the first two quarters.

## Empty Container Repositioning: A Hidden Cost Driver

The second project is ongoing, and arguably more complex. Empty container repositioning — moving containers that have no cargo — accounts for a substantial fraction of shipping costs globally. Estimates suggest it contributes to 20–25% of total container movements worldwide.

The core challenge is a spatial imbalance: trade flows are asymmetric. Containers accumulate at import-heavy locations and are scarce at export origins. The obvious solution is to reposition them, but deciding *when*, *where*, and *how many* to move requires solving a multi-period, multi-location optimisation problem.

We're approaching this using a **minimum-cost flow formulation** over a time-space network:

- Nodes represent depots and ports at specific time windows
- Arcs capture repositioning moves, storage, and import/export flows
- The objective minimises total repositioning and storage cost subject to container balance constraints at each node-time combination

What makes this interesting in practice is the uncertainty — you're essentially hedging future demand while making present repositioning decisions. We're experimenting with a stochastic programming extension to handle demand uncertainty explicitly.

## What I've Learned

The most important lesson is deceptively simple: **the best model is the one that gets used**. A sophisticated forecasting algorithm that sits in a Python notebook and never reaches operational staff has zero impact. Usability, interpretability, and change management are as important as technical rigour.

The second lesson is about data quality. Both projects required significant upfront investment in data cleaning and validation — work that rarely gets celebrated but determines whether the downstream analysis is trustworthy.

> "Without data, you're just another person with an opinion." — W. Edwards Deming

For students in transport, logistics, or engineering more broadly: seek out projects where you can build end-to-end — from problem framing through data collection, modelling, and implementation. That full-stack experience, in the analytical sense, is what distinguishes a consultant from a calculator.

---

*Dinuli Galgamuwa is a 3rd-year BSc Engineering (Transport Management & Logistics) student at the University of Moratuwa and a CIMA candidate at Management Level.*
