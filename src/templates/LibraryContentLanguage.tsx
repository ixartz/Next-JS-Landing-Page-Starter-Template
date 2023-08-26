type ILibraryContentLanguageProps = {
  language: string;
};

const LibraryContentLanguage = (props: ILibraryContentLanguageProps) => (
  <>
    {props.language.includes('crk') && <span className="p-1 font-bold">Y</span>}
    {props.language.includes('eng') && <span className="p-1 font-bold">E</span>}
  </>
);

export { LibraryContentLanguage };
