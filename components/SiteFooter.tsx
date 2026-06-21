/**
 * サイト共通フッター
 *
 * 免責・広告（景表法ステマ規制対応の明示）・最終更新・運営者情報を表示する。
 * layout.tsx から全ページ共通で呼び出される。
 *
 * 注：about / privacy / disclosure の各コンプラページは現フェーズではスコープ外のため、
 *     リンク切れを避けて内部リンクは設置していない（GA4本番有効化時に S001 を流用して追加予定）。
 */

import { SITE_META, OPERATOR_INFO } from '@/lib/site-meta';

export default function SiteFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-3xl mx-auto px-4 py-8 text-xs text-gray-500 space-y-3">
        <p>
          <strong className="text-gray-700">免責事項：</strong>
          本シミュレーターの計算結果はあくまで参考値です。実際の税額は個別の事情により異なる場合があります。重要な意思決定の前には、税理士・FP等の専門家にご相談ください。本サイトの情報により生じたいかなる損害についても責任を負いません。
        </p>
        <p>
          <strong className="text-gray-700">広告について：</strong>
          ※当ページには広告（アフィリエイトリンク）が含まれます。リンク経由でサービスの申込・契約が成立した場合、運営者に報酬が支払われることがあります。
        </p>
        <p>
          <strong className="text-gray-700">運営者：</strong>
          {OPERATOR_INFO.name}（お問い合わせは{OPERATOR_INFO.email}）
        </p>
        <p>
          <strong className="text-gray-700">最終更新：</strong>
          {SITE_META.lastUpdated} ／
          <strong className="text-gray-700"> 適用法令：</strong>
          {SITE_META.appliedLawDate}現在
        </p>
      </div>
    </footer>
  );
}
