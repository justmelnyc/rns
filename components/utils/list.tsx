import {Fragment, ReactNode, Key, ReactElement, ElementType, CSSProperties} from 'react'
import {Show, Wrap} from '@/components/utils/index'

// Here, T is constrained to be an object type
type ListProps<T extends Record<string, any>> = {
    from: T[] | undefined | null;
    children: (item: T, index: number) => ReactNode;
    keyExtractor?: (item: T) => Key;
    loading?: boolean;
    LoadingComponent?: ReactElement;
    EmptyComponent?: ReactElement;
    className?: string;
    style?: CSSProperties;
    as?: ElementType; // Updated to React.ElementType

};

const generateList =
    (length: number) => Array.from({length}, (_, index) => ({id:index}))

function List<T extends Record<string, any>>({
                                                 from,
                                                 keyExtractor,
                                                 children,
                                                 loading,
                                                 LoadingComponent = <div>Loading...</div>,
                                                 EmptyComponent,
                                                 className,
                                                 style,
                                                 as: Wrapper = 'div',

                                             }: ListProps<T>) {
    return (
        <Show when={loading} fallback={
            <Show when={from && from.length > 0} fallback={EmptyComponent}>
                <Wrap when={className} with={(wrapped) => (
                    <Wrapper style={style} className={className}>
                        {wrapped}
                    </Wrapper>
                )}>
                    {from?.map((item, index) => {
                        // Use optional chaining and ensure key is always a valid Key
                        const key: Key = item.id?.toString() ?? keyExtractor?.(item).toString() ?? index.toString()
                        return (
                            <Fragment key={key}>
                                {children(item, index)}
                            </Fragment>
                        )
                    })}
                </Wrap>
            </Show>
        }>
            {LoadingComponent}
        </Show>
    )
}

export default List
