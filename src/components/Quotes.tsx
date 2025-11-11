import { useState, useEffect } from 'react';
import { Quote, RefreshCw } from 'lucide-react';

interface QuoteData {
  text: string;
  author: string;
}

export default function Quotes() {
  const [quote, setQuote] = useState<QuoteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const inspirationalQuotes: QuoteData[] = [
    {
      text: 'You are braver than you believe, stronger than you seem, and smarter than you think.',
      author: 'A.A. Milne',
    },
    {
      text: 'Cancer may have started the fight, but I will finish it.',
      author: 'Anonymous',
    },
    {
      text: 'Courage doesn\'t always roar. Sometimes courage is the quiet voice at the end of the day saying, "I will try again tomorrow."',
      author: 'Mary Anne Radmacher',
    },
    {
      text: 'The human spirit is stronger than anything that can happen to it.',
      author: 'C.C. Scott',
    },
    {
      text: 'Hope is the only thing stronger than fear.',
      author: 'Suzanne Collins',
    },
    {
      text: 'Every day is a gift. That\'s why they call it the present.',
      author: 'Bill Keane',
    },
  ];

  const fetchQuote = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch('https://api.quotable.io/random?tags=inspirational');

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      setQuote({
        text: data.content,
        author: data.author,
      });
    } catch (err) {
      const randomQuote = inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];
      setQuote(randomQuote);
      setError(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl shadow-xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <Quote className="w-48 h-48 transform rotate-12" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Words of Inspiration
              </h2>
              <button
                onClick={fetchQuote}
                disabled={loading}
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Get new quote"
              >
                <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
              </button>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : quote ? (
              <div className="space-y-6">
                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed">
                  "{quote.text}"
                </blockquote>
                <p className="text-lg opacity-90">
                  — {quote.author}
                </p>
              </div>
            ) : (
              <p className="text-center text-lg opacity-75">
                Unable to load quote. Please try again.
              </p>
            )}
          </div>
        </div>

        {error && (
          <p className="text-center text-sm text-gray-500 mt-4">
            Showing curated quotes
          </p>
        )}
      </div>
    </section>
  );
}
