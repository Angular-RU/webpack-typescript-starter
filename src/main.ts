async function bootstrap(main: HTMLMainElement) {
    const module = await import(`./pages${location.pathname}.ts`);
    main.innerHTML = module.default;
}

document.addEventListener('DOMContentLoaded', async () => {
    const main: HTMLMainElement = document.querySelector('main');
    const links = Array.from(document.querySelectorAll('a'));

    await bootstrap(main);

    links.forEach((link) => {
        link.addEventListener('click', async (e: MouseEvent) => {
            e.preventDefault();

            const module = await import(`./pages/${link.dataset.chunk}.ts`);

            history.replaceState({}, `${link.dataset.title}`, `/${link.dataset.chunk}`);
            main.innerHTML = module.default;
        });
    });
});
