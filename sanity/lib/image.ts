type ImageSource =
  | string
  | {
      url?: string;
      asset?: { url?: string; _ref?: string };
      [key: string]: unknown;
    }
  | null
  | undefined;

function resolveUrl(source: ImageSource): string {
  if (!source) return "/placeholder.svg";
  if (typeof source === "string") return source;
  if (typeof source.url === "string") return source.url;
  if (typeof source.asset?.url === "string") return source.asset.url;
  return "/placeholder.svg";
}

class ImageUrlBuilder {
  private source: ImageSource;

  constructor(source: ImageSource) {
    this.source = source;
  }

  width(_width: number) {
    return this;
  }

  height(_height: number) {
    return this;
  }

  fit(_fit: string) {
    return this;
  }

  url() {
    return resolveUrl(this.source);
  }
}

/** Local-data stub: supports urlFor(source).url() and .width().url() */
export const urlFor = (source: ImageSource) => new ImageUrlBuilder(source);
