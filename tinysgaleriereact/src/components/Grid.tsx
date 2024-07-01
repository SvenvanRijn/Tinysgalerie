
export default function Grid({ children }: any) {
    return (
        <div className="grid grid-cols-3 gap-4">
            {children}
        </div>
    );
}

