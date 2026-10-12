# Where Does the Energy Go? Profiling LLM Agent Inference on Blackwell GPUs

Project page for the paper, accepted at the NeurIPS 2026 Workshop on Resource-Aware Agentic AI.

- **Page:** https://rocky-lq.github.io/agent-energy-blackwell/
- **Paper:** [arXiv:2609.29707](https://arxiv.org/abs/2609.29707)
- **Authors:** Qi Luo, Kunlin Li, Ziwen Wang, Yun Chen (HKUST(GZ))

## Summary

A full-stack energy profile of LLM agent inference. GPU, CPU, DRAM and whole-system power are measured together
(NVML, Intel RAPL, IPMI) on a server with two NVIDIA RTX PRO 6000 Blackwell GPUs, running Qwen3.8-27B on vLLM
across agentic coding, mathematical reasoning and continuous serving.

- GPU-only telemetry misses 41–45% of system energy across all three workloads.
- A sequential agent uses 63× more system energy per output token than saturated serving.
- Extended thinking adds 21–75% more tokens per problem; per-token energy changes by less than 1%.
- Continuous batching improves system energy efficiency by 3.2× from 1 to 16 requests per second.
- Reasoning throughput is unchanged under per-GPU power caps of 400–600 W and drops sharply at 300 W.

## Repository layout

```
index.html            the page
static/css/style.css  styles
static/js/main.js     chart tooltip and BibTeX copy button
static/figs/          figures cropped from the paper (SVG)
static/poster/        poster PDF and preview image
static/img/           favicon and social preview card
```

The site is plain HTML, CSS and JavaScript with no build step. To preview it locally:

```
python3 -m http.server 8000    # then open http://localhost:8000
```

To publish with GitHub Pages: Settings → Pages → Deploy from a branch → `main` / `(root)`.

## Citation

```bibtex
@inproceedings{luo2026energy,
  title     = {Where Does the Energy Go? Profiling {LLM} Agent Inference on {Blackwell} {GPUs}},
  author    = {Luo, Qi and Li, Kunlin and Wang, Ziwen and Chen, Yun},
  booktitle = {NeurIPS 2026 Workshop on Resource-Aware Agentic AI},
  year      = {2026},
  eprint    = {2609.29707},
  archivePrefix = {arXiv},
  primaryClass  = {cs.DC}
}
```
