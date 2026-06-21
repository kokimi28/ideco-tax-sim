import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_META } from '@/lib/site-meta';

export const metadata: Metadata = {
  title: 'このシミュレーターについて',
  description:
    'iDeCo・退職金 受取順序シミュレーターの目的・計算の前提・法的根拠・カバー範囲・データの取り扱い方針について。',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            ← トップに戻る
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-3">このシミュレーターについて</h1>
        </div>
      </header>

      <main className="px-4 py-8">
        <article className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg p-6 space-y-6 text-sm text-gray-800 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">サイトの目的</h2>
            <p>
              本サイトは、iDeCo・企業型DCの一時金と会社の退職金を<strong>どちらも一時金で受け取る</strong>方を対象に、受け取る<strong>順序・間隔</strong>によって退職所得控除の重複調整がどう変わり、所得税・住民税・手取り額がいくらになるかを事前に把握できるようにすることを目的とした、無料の単機能シミュレーターです。受取タイミングの検討材料としてご利用ください。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">計算の前提と法的根拠</h2>
            <p>本シミュレーターは、以下の法令・通達に基づいて計算しています。</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>所得税法 第30条（退職所得・退職所得控除）</li>
              <li>所得税法施行令 第69条（勤続年数の計算・同一年の通算）</li>
              <li>所得税法施行令 第70条（退職所得控除額の計算の特例＝重複期間の調整・みなし勤続期間）</li>
              <li>所得税法施行令 第72条第7号（iDeCo・企業型DC の掛金拠出期間を勤続年数とみなす）</li>
              <li>地方税法（退職所得に係る住民税）</li>
              <li>復興特別所得税法</li>
              <li>国税庁タックスアンサー No.1420 / No.2732 / No.2735</li>
              <li>退職所得の源泉徴収税額の速算表</li>
              <li>令和7年度税制改正（iDeCo・企業型DC一時金が先の場合の重複判定が5年→10年へ。2026年1月1日／令和8年1月1日以後に支払われる退職金に適用）</li>
            </ul>
            <p className="mt-3">
              適用法令日：<strong>{SITE_META.appliedLawDate}施行</strong> ／ 最終確認日：<strong>{SITE_META.lastUpdated}</strong>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">このシミュレーターでカバーしない範囲</h2>
            <p>
              以下のケースは計算ロジックに含まれていません。該当する方は、税理士または所轄の税務署にご相談ください。
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>iDeCo・退職金を「年金（分割）」で受け取る場合、一時金と年金を併用する場合</li>
              <li>公的年金等の繰下げ受給との組み合わせ</li>
              <li>勤続5年以下が関わる短期退職手当等・特定役員退職手当等の特例（1/2課税の制限）</li>
              <li>同一年に複数の勤務先から退職金を受け取る場合の詳細な特例判定</li>
              <li>障害退職・死亡退職に係る控除額の加算や相続税の取り扱い</li>
              <li>非居住者の退職所得、外国法人からの退職金</li>
              <li>「退職所得の受給に関する申告書」を提出していない場合の20.42%源泉徴収後の確定申告計算</li>
            </ul>
            <p className="mt-3">
              なお、勤続期間とiDeCo加入期間の重複は「重複年数の直接入力」による簡易モデルで計算しています。厳密には暦日の重なりに依存するため、複雑なケースは専門家にご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">データの取り扱い</h2>
            <p>
              本サイトは、入社年・退職年・iDeCoの加入年・受給年・金額などの入力データを<strong>サーバーには一切送信しません</strong>。すべての計算はあなたのブラウザ内で完結し、入力内容も結果も保存されません。詳細は
              <Link href="/privacy" className="text-blue-600 hover:underline">プライバシーポリシー</Link>
              をご覧ください。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">更新方針</h2>
            <p>
              税制改正の影響を受ける箇所は、改正法の施行に合わせて更新します。最低でも年1回、すべての計算ロジックを国税庁の最新通達と照合します。最終確認日はトップページ下部に表示されています。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">免責</h2>
            <p>
              本サイトは情報提供を目的とした参考ツールであり、税務助言・金融助言・法律助言を行うものではありません。実際の納税額は個別の事情により異なる場合があります。重要な意思決定の前には、必ず税理士・FP等の専門家にご相談ください。本サイトの情報を利用したことにより生じたいかなる損害についても、運営者は責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">運営者情報</h2>
            <p>
              運営者の情報・連絡先については、
              <Link href="/disclosure" className="text-blue-600 hover:underline">運営者情報ページ</Link>
              をご覧ください。
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
