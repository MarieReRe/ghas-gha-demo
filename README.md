# Secure Delivery Demo App

A minimal Node.js application used to demonstrate secure software delivery patterns with GitHub-native workflows.

## Overview

This repository is intentionally small so teams can focus on the software delivery lifecycle rather than application complexity. It is useful for exploring:

- CI/CD automation with GitHub Actions
- code scanning with CodeQL
- secure development guardrails in pull requests
- repository security controls such as secret protection and push protection
- workflow hardening patterns for modern engineering teams

## What’s in this repo

- `app.js` — a lightweight Express application
- `package.json` — project metadata and dependencies
- `.github/workflows/codeql.yml` — GitHub Actions workflow for CodeQL analysis

## Why this repo exists

Many teams want to improve developer experience and security posture at the same time, but they often evaluate those goals separately. This repository provides a compact environment for testing how security feedback can be incorporated into normal engineering workflows.

The intent is to show how:
- automation can run in response to code changes
- security checks can be integrated into delivery pipelines
- issues can be identified earlier in the development lifecycle
- secure defaults can be standardized across repositories

## Example use cases

This repository can be used to explore:

- pull request-based security feedback
- code scanning configuration and analysis behavior
- workflow execution and troubleshooting
- security policy tuning for development teams
- reusable patterns for secure delivery

## Running locally

Install dependencies:

```bash
npm install
