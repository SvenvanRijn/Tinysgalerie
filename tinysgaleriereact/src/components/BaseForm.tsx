
interface Props {
    children?: React.ReactElement[],
    method?: string,
    action?: string
}

export default function BaseForm({children}: Props) {


    return (
        <>
            {children}
        </>
    );
}
