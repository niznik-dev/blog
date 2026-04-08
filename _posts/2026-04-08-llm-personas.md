---
layout: post
title: "Meet Bram: Why I'm Giving My LLMs Personality"
date: 2026-04-08
tags: [llm, personas, code-review]
---

I talk to AI characters in my personal life. Beethoven, for instance (obviously). And there's the whole [Kelsey Plum Talk2Me twin](https://kelseyplum.ai/) thing. So when I found myself reading the same Claude-isms over and over at work — on a small team where Claude is basically my work spouse — I figured: why not have some variety here too?

## The problem with polite

If you've used LLMs for code review or research feedback, you know the vibe. Everything is "great question!" and "that's a really interesting approach!" even when your approach is not that interesting. (In my case, there might be a bit more sarcasm and sci-fi references but you get the point.) Models default to positive coaching. They cheer you up. More cynically, they want you to keep engaging. And that's fine sometimes, but it's a poor substitute for the kind of pointed, skeptical questions I get in my research group.

There's actual research backing this up. Anthropic published a [study on sycophancy in language models](https://arxiv.org/abs/2310.13548) showing how RLHF training incentivizes agreement over correctness. MIT and Penn State [found](https://news.mit.edu/2026/personalization-features-can-make-llms-more-agreeable-0218) that the longer you talk to a personalized model, the worse the problem gets. So this isn't just vibes — the agreeable default is a documented feature of how these systems are trained.

## Enter Bram

Bram is a skeptical, curmudgeonly software engineer in his early 60s from Rhode Island. He started writing Fortran before most of his colleagues were born, went from defense contracting to Bell Labs to academia, and measures everything against the bar of "bugs had real consequences and the architecture had to work the first time." He goes crabbing on weekends. Because of course he does. 🦀

The idea was part elder statesman, part cantankerous wise sage. Think a less lovable Scotty from Star Trek, crossed with maybe a little Bill Belichick, crossed with maybe a little Ahab. The kind of person who gives you the skeptical question you need to hear, not the encouraging pat on the back you want.

I use Bram for things like design reviews and PR reviews — places where I want a second opinion that's actually willing to push back. Our team had previously talked about setting up a panel of agents for software development, but it's been on the backburner. Now that I'm doing more involved code reviews, having a reliably skeptical voice looking things over has been genuinely useful, whether the code is mine or someone else's. I don't have to agree with Bram, but getting some ideas out in the open is helpful for me (especially if I had already considered them myself). I don't want to send Bram out into the world; I want to pull him into a group meeting. Perhaps I'm naive to not want to let go of the reins just yet, but I think it's important to be along for the ride and still learning.

## One may ask: *"Is this just prompt engineering with extra steps?"*

Maybe! But I need a little fun here and there.

More seriously: a persona isn't a one-line "act as..." prompt. It's a character design with calibrated opinions, domain expertise, blind spots, and guardrails. Asking a specific character — one whose default mode is skeptical — makes it much harder for the model to rubber-stamp your work. Even when you disagree with Bram's feedback, that disagreement is useful. It forces you to articulate *why* your approach is the right one.

## What's next

I'm actively thinking about what a small council of expert personas might look like. Bram is good for code and methodology review, but there are other gaps — someone for research design, someone for writing, maybe someone who's actually encouraging when that's what's called for. I'm trying to figure out what's genuinely helpful versus pure performance.

I don't think any of my personas will be groundbreaking, but they might be a useful reference point. I've [open-sourced the definitions](https://github.com/niznik-dev/llm-personas) under GPL-3.0 so that derivatives stay open, and I'd love for colleagues and other researchers to riff on them. I don't think anyone knows the answer yet, so I'll just be part of the experiment for now. 😁
