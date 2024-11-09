type ILibraryContentLanguageProps = {
  language: string;
};

const LibraryContentLanguage = (props: ILibraryContentLanguageProps) => (
  <>
    {props.language.includes('crk') && <span className="p-1 font-bold">Y</span>}
    {props.language.includes('crm') && <span className="p-1 font-bold">L</span>}
    {props.language.includes('csw') && <span className="p-1 font-bold">N</span>}
    {props.language.includes('cwd') && (
      <span className="p-1 font-bold">TH</span>
    )}
    {props.language.includes('eng') && <span className="p-1 font-bold">E</span>}
  </>
);

export { LibraryContentLanguage };
