
export default function Grid({ children }: any) {
    return (
        <div className="grid sm:grid-cols-3 gap-4">
            {children}
        </div>
    );
}

