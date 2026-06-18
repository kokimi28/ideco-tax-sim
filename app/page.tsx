import { SITE_META } from '@/lib/site-meta';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {SITE_META.name}
          </h1>
          <p className="text-sm text-gray-600 mt-1">{SITE_META.description}</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
          <p className="text-lg font-medium text-gray-900 mb-2">
            準備中
          </p>
          <p className="text-sm text-gray-600">
            iDeCo・企業型DCの一時金にかかる税金を、退職金との受取順序・間隔まで考慮して計算するシミュレーターを開発中です。
          </p>
          <p className="text-xs text-gray-400 mt-6">
            2026年改正（10年ルール・19年ルール）対応予定 ／ 適用法令：{SITE_META.appliedLawDate}
          </p>
        </div>
      </main>
    </div>
  );
}
