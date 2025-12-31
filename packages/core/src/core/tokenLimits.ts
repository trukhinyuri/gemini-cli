/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

type Model = string;
type TokenCount = number;

export const DEFAULT_TOKEN_LIMIT = 1048576;

export function tokenLimit(_model: Model): TokenCount {
  // Return token limit for all models
  return DEFAULT_TOKEN_LIMIT;
}
