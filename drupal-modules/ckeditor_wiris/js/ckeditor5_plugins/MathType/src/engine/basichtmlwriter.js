/**
 * This file was copied as it was not included in the export of ckeditor5-engine (index).
 */

/**
 * Basic HTML writer. It uses the native `innerHTML` property for basic conversion
 * from a document fragment to an HTML string.
 */
export class BasicHtmlWriter {
  /**
   * Returns an HTML string created from the document fragment.
   */
  getHtml(fragment) {
    const doc = document.implementation.createHTMLDocument('');
    const container = doc.createElement('div');
    container.appendChild(fragment);
    return container.innerHTML;
  }
}
