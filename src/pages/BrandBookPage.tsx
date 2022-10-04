import React, {FC, useLayoutEffect} from 'react';
import {useLayout} from '../hooks/useLayout';
import {useNavigate} from 'react-router-dom';
import {BrandBook} from '../components/namespaces/brandbook/BrandBook';

export const BrandBookPage: FC = () => {
    const {state: layout} = useLayout();
    const navigate = useNavigate();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        layout.footer.topPeace.set(true);
        layout.footer.state.set(true);
    }, []);

    return (
        <div style={{minHeight: 'calc(100vh - 333px)'}}>
            <BrandBook.Heading>
                <BrandBook.HeadingColumn>
                    <BrandBook.HeadingTitle>
                        Брендбук
                    </BrandBook.HeadingTitle>
                    <BrandBook.HeadingDescription>
                        Вы сотрудничаете с DangerZone, работаете в DangerZone или создаете производное искусство? В этом
                        кратком руководстве показано, что вы можете и чего не можете делать с элементами брендинга
                        DangerZone.
                    </BrandBook.HeadingDescription>
                </BrandBook.HeadingColumn>
                <BrandBook.HeadingColumn>
                    <span>dasdas</span>
                </BrandBook.HeadingColumn>
            </BrandBook.Heading>
        </div>
    );
};
