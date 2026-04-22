const SAFE_URL_PROTOCOLS = ["http:", "https:", "mailto:"];

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isSafeUrl(url: string): boolean {
  if (url.startsWith("/") || url.startsWith("#")) {
    return true;
  }

  try {
    const parsed = new URL(url);
    return SAFE_URL_PROTOCOLS.includes(parsed.protocol);
  } catch {
    return false;
  }
}

export function formatInlineRichText(input: string): string {
  let html = escapeHtml(input);

  html = html.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_full, text, url) => {
    if (!isSafeUrl(url)) {
      return text;
    }

    const safeHref = escapeHtml(url);
    return `<a href="${safeHref}" target="_blank" rel="noopener noreferrer">${text}</a>`;
  });

  html = html
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/__(.+?)__/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/_(.+?)_/g, "<em>$1</em>");

  return html;
}
