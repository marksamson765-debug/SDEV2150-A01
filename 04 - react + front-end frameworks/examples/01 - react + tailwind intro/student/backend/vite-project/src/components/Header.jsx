// src/components/Header.jsx
export default function Header({ tagline }) {
  /* 
  i don't know why the readme tells you to do this,
  it's just making tagline false no matter what
  tagline = false;
  */
  return (
    <header className="mb-4">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h1 className="text-xl font-semibold text-sky-600">NAIT Resource Directory</h1>
          <p className="text-sm text-gray-500">
            {/*if tagline exists, put it in the <p> tag. if not, use the default*/}
            {tagline ? tagline : "Find student support services, labs, and campus resources."}

            {/*alternatively  i can do:*/}
            {/*{tagline || "Find student support services, labs, and campus resources."}*/}
          </p>
        </div>
      </div>
    </header>
  );
}