# 目的 / Why

<!-- この PR が何を解決するかを1〜2文で -->

# 変更点 / What

-

## 検証 / Verification

- [ ] `npx tsc --noEmit` green
- [ ] `npm test`（Vitest）green
- [ ] `npm run build` 成功
- [ ] UI 変更あり → Playwright MCP（ローカル）または `node scripts/verify-ui-remote.mjs <URL...>`（リモート）で該当ページを実機確認した / UI 変更なし

## 未検証項目 / Not verified

<!-- 実行環境の制約（リモートセッション: secrets 不在・外部疎通遮断・MCP 不在等）で実行できなかった検証を列挙する。全部実行できたら「なし」と書く -->

- なし

## スコープ確認 / Scope

- [ ] 法改正対応（`lib/calculations.ts` の変更）あり → 同一 PR で `lib/calculations.test.ts` と法的根拠コメント・`lib/site-meta.ts` の法令確認日を更新した / 法改正対応なし
- [ ] 収益が発生しうる導線（ASP URL 差し込み・CTA 有効化）に触れていない（オーナー専任 STOP・CLAUDE.md「収益化トリガー」節）
