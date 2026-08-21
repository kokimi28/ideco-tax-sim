# CLAUDE.md

## プロジェクト概要

iDeCo受取税シミュレーター。iDeCo/企業型DCの一時金と会社の退職金をいずれも「一時金」で受け取る場合に、受取順序・間隔による退職所得控除の重複調整と税額・手取りの変化を試算する Web ツール（Next.js App Router / 静的ページ / Vercel でホスティング）。

- 計算ロジックは `lib/calculations.ts` に集約（純粋関数・法的根拠コメント付き）。UI 層（`components/Calculator.tsx`）からは `calcIdecoSim()` / `compareVariants()` を呼ぶ。
- サイト共通のメタ情報（サイト名・URL・法令確認日など）は `lib/site-meta.ts` に集約。

## 使用コマンド

| 目的                          | コマンド                       |
| ----------------------------- | ------------------------------ |
| 開発サーバー                  | `npm run dev`（ポート3000）    |
| 型チェック                    | `npx tsc --noEmit`             |
| ユニットテスト                | `npm test`（Vitest）           |
| テスト watch                  | `npm run test:watch`           |
| 本番ビルド確認                | `npm run build`                |

実装後は 型チェック → テスト → ビルド の3点を通してから完了とする（CI も同じ3点を検証する: `.github/workflows/ci.yml`）。

## 規約

- **法改正対応は必ずテスト更新とセット**: 退職所得控除・税率・重複判定ルール（10年ルール／19年ルール／同年合算）等の法令変更を反映するときは、`lib/calculations.ts` の変更と同一 PR で `lib/calculations.test.ts` のテストを更新・追加する。あわせて法的根拠コメント（参照条文・タックスアンサー番号）と `lib/site-meta.ts` の法令確認日も更新する。
- 計算ロジックは UI コンポーネントに埋め込まず、`lib/` の純粋関数として実装して Vitest でテストする。
- `main` への直接 push はしない（PR 経由・CI green を確認してからマージ）。
- secrets・個人情報をコード・コミット・Issue・PR に書かない。

## リモート/クラウドセッション運用（claude.ai/code・スマホ発）

`CLAUDE_CODE_REMOTE=true` のとき、claude.ai/code のクラウドコンテナ（Linux）で実行されている。SessionStart hook（`.claude/hooks/session-start.mjs`）が依存導入と環境診断（preflight）を行い、結果をセッション冒頭に出力する。この環境ではローカルの個人設定（`~/.claude/`・ユーザー MCP）は届かない前提で、以下の縮退規約に従う。

- **止まらない**: 検証手段が無いことを理由に作業を中断しない。実装 → 実行可能な検証をすべて実行 → push → draft PR 作成 → CI green まで追走、が完了の定義。
- **検証はできるものを全部**: 検証3点（`npx tsc --noEmit` → `npm test` → `npm run build`）は必ず実行する。実行できなかった検証は PR 本文の「未検証項目」に列挙する（黙って省略しない）。
- **UI 実機確認の代替**: Playwright MCP が無い環境では、開発サーバーを起動して `node scripts/verify-ui-remote.mjs http://localhost:3000/ <他URL...>` を実行し、スクリーンショット（`.claude/tmp/ui-*.png`）を Read で視覚確認する（同梱 Chromium 使用・依存追加なし）。
- **secrets 非接触**: `.env` 系はこの環境に無い（本リポはサーバー秘密なしの静的ツールなので通常影響しない）。env 必須の検証が生じたらスキップして未検証項目に記載する（値の要求・推測・生成をしない）。
- **外部疎通の限界**: allowlist 外（`*.vercel.app` 等）への疎通確認は不可（HTTP 000）。デプロイ後確認は CI とオーナーに委ねる。
- **収益化トリガーは STOP のまま**: リモートでも「収益化トリガー」節（下記）のオーナー専任 STOP は一切緩めない。ASP URL 差し込み・CTA 有効化はリモートセッションでも単独実行しない。

## 収益化トリガー（Vercel Hobby→Pro・オーナー専任）

- **ASP 案件 URL の差し込み（`components/Calculator.tsx` の `href="#"` の差し替え）・CTA の有効化など、収益が発生しうる導線を有効にする変更は、Vercel Pro（$20/月）への移行判断とセットで行う**。Vercel Hobby（無料枠）は非商用限定のため。
- これは決済・課金＝**オーナー専任の STOP 対象**。エージェントは URL 差し替え等を「軽微な変更」として単独実行してはならない。必ずオーナーの Pro 移行判断を確認してから行う。
- 正本: dev-env `docs/dev-env/project-bootstrap.md`「Vercel Hobby の非商用制限」節。
