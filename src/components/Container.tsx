import React, { ReactNode } from 'react';

interface ContainerProps {
    as?: keyof JSX.IntrinsicElements;
    children: ReactNode;
    className?: string;
}

export const Container: React.FC<ContainerProps> = ({
    as: Element = 'div',
    children,
    className,
    ...rest
}) => {
    return (
        <Element
            {...rest}
            className={`px-5 w-full max-w-screen-md m-auto ${className}`}
        >
            {children}
        </Element>
    );
};
