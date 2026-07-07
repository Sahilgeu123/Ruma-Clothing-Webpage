import React from 'react';

type Props = {
    blurActive?: boolean;
};

export default function Detail({ blurActive = false }: Props) {
    return (
        <section className={`detail-panel${blurActive ? ' blur-active' : ''}`}>
            <div className="detail-grid">
                <article>
                    <h2>Responsive by design</h2>
                    <p>Canvas dimensions adapt instantly to window resize events and keep the model filling the view.</p>
                </article>
                <article>
                    <h2>Premium dark UI</h2>
                    <p>Soft glow accents, custom scrollbar styling, and a polished loader keep the experience elegant.</p>
                </article>
                <article>
                    <h2>Micro-optimized scroll</h2>
                    <p>Target progress is updated from the page scroll position and gently interpolated in a render loop.</p>
                </article>
            </div>
        </section>
    );
}
