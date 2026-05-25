# GitHub Domain Verification Runbook

Verifying the `trestleiq.com` domain with the GitHub organization proves ownership and enables org-level features (verified badge, SSO enforcement, secret scanning for commits referencing the domain).

## Prerequisites

- Owner access to the `TrestleIQ` GitHub organization
- DNS access for `trestleiq.com` (via the DNS provider used by Trestle)

## Steps

### 1. Initiate verification in GitHub

1. Go to **GitHub.com → TrestleIQ organization → Settings → Verified & approved domains**.
2. Click **Add a domain**.
3. Enter `trestleiq.com` and click **Add domain**.
4. GitHub displays a DNS TXT record to add. Copy the full record value (format: `_github-challenge-TrestleIQ-org.<domain>`).

### 2. Add the DNS TXT record

Add the TXT record to `trestleiq.com` via the DNS provider:

| Field | Value |
|---|---|
| Type | `TXT` |
| Host/Name | `_github-challenge-TrestleIQ-org` (or `_github-challenge-TrestleIQ-org.trestleiq.com` — depends on provider) |
| Value | The token value shown in the GitHub UI |
| TTL | 3600 (or provider default) |

DNS propagation typically takes a few minutes to up to 48 hours.

### 3. Verify in GitHub

1. Return to **Settings → Verified & approved domains**.
2. Find the pending `trestleiq.com` entry and click **Continue verifying** → **Verify**.
3. GitHub checks for the TXT record. If propagation is complete, the domain shows **Verified**.

### 4. Confirm and clean up (optional)

- Once verified, the TXT record can remain in DNS without side effects.
- Notify the team that domain verification is complete.

## Troubleshooting

| Issue | Resolution |
|---|---|
| Verification fails immediately | DNS propagation not yet complete — wait and retry |
| Can't find the TXT record to add | Ensure you're editing the correct zone (`trestleiq.com`, not a subdomain) |
| No Owner access to GitHub org | Request Owner role from an existing org Owner |
