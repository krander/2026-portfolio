---
title: "Why accessibility reviews keep failing — and what to do instead"
description: "Most teams treat accessibility as a gate at the end of the process. That's not a resourcing problem — it's a mental model problem. On changing when the conversation happens."
date: 2024-03-14
readtime: 5 min
standfirst: "Most teams treat accessibility as a gate at the end of the process. That's not a resourcing problem or a knowledge problem. It's a mental model problem — and fixing it requires changing when the conversation happens, not just how thorough it is."
prevTitle: "Research that moves things: on the difference between insight and ammunition"
prevUrl: /writing/research-that-moves-things/
nextTitle: "The alignment tax: what it costs to keep three teams pointed the same direction"
nextUrl: /writing/alignment-tax/
---

There's a pattern I've seen repeat across organisations of different sizes, with different levels of design maturity. A product is weeks from shipping. Someone schedules an accessibility review. The review surfaces twenty issues. Twelve get fixed. Eight get logged as "future work." The product ships. The eight issues are never revisited.

This is treated as an execution problem — not enough time, not enough buy-in, not enough dedicated resource. But the execution problem is downstream of something else: accessibility was framed as a review, which means it was framed as a filter. Filters happen at the end. And things that happen at the end are, by definition, easy to defer.

{% pullquote %}An accessibility review at the end of a project is a quality check on decisions that were already made without accessibility in mind.{% endpullquote %}

The issues that surface in late-stage reviews are rarely novel. They're the predictable consequences of decisions made much earlier — colour choices made in a mood board, interaction patterns chosen for aesthetic reasons, a component library adopted without checking its ARIA support. By the time the review happens, those decisions are load-bearing. Changing them is expensive. So they don't get changed.

## Where the conversation needs to start

The most effective accessibility work I've been part of didn't start with a WCAG checklist. It started with a question asked during problem framing: who are we assuming can use this, and what are we assuming about how they'll use it? That question, asked early enough, changes the design brief — not the design review.

This isn't about adding an "accessibility kickoff" to the project plan. It's about treating access as a constraint in the same way performance or localisation are treated as constraints — things that shape decisions from the start, not things that are checked at the end. The difference is that performance and localisation have stronger advocates in engineering. Accessibility often doesn't have that advocate, so it defaults to a design or QA responsibility that arrives too late to matter.

## What actually changes things

Three things have made a consistent difference in my experience. First, getting assistive technology into usability research early — not as a separate "accessible usability study" but as part of standard practice. When a screen reader user is in your research pool from the start, their experience stops being an edge case and starts being a data point.

Second, making accessibility criteria part of the definition of done at the component level, not the product level. A component that ships without meeting its accessibility criteria doesn't ship. This is harder to enforce than it sounds, but it distributes the responsibility across the team rather than concentrating it in a review.

Third — and this is the one that gets resisted most — accepting that some accessibility debt is real debt, not a future-work item. Logging eight issues as "future work" with no owner, no priority, and no scheduled revisit isn't a plan. It's a way of feeling like you have a plan. Naming that clearly, in the project documentation, is the only honest way to make it visible enough to actually get addressed.

None of this makes accessibility easy. But it makes it tractable — which is a different thing, and a more useful goal to aim for.
