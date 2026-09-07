/**
 * Local MVP: Sanity Live is disabled. Query layer uses data/local instead.
 */
export const sanityFetch = async <T = unknown>(_options: {
  query: string;
  params?: Record<string, unknown>;
}): Promise<{ data: T }> => {
  return { data: [] as T };
};

export const SanityLive = () => null;
