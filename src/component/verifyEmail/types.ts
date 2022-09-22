export type InputEvent = React.ChangeEvent<HTMLInputElement>;
export type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

export type errorTypes = "code" | "timer" | null;

export type Action =
  | { type: "SETCODE"; payload: { value: string, index: number } }
  | { type: "SETISEXPIREDFALSE"; }
  | { type: "SETISEXPIREDTRUE"; }
  | { type: "SETERROR"; payload: { name: errorTypes, message: string, viewerror: string } };

export interface VerifyField {
    timer: number;
    code: string[];
    error: { name: errorTypes, message: string, viewerror: string } ;
    isExpired:boolean
};

export interface CodeType {
    code:string [];
    index: number;
    handleChangeCode: (e:InputEvent) => void
}

export interface TimeType {
    minutes: number;
    seconds: number;
}