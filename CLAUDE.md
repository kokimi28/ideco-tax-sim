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
