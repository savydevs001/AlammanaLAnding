/**
 * Emits JSON-LD blocks. Keeping this in one place means every page ships schema
 * the same way, and adding a node is a one-line change rather than another
 * hand-written <script dangerouslySetInnerHTML> block.
 */
export default function JsonLd({ schema }: { schema: object | object[] }) {
  const items = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {items.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
