import Navigation from '../Navigation.jsx'

function Layout({ children }) {
    return (
        <div className="min-h-screen">
            <Navigation />
            {/* Padding bottom untuk mobile nav, padding top untuk desktop nav */}
            <main className="pb-24 md:pb-0 md:pt-5">
                {children}
            </main>
        </div>
    );
}

export default Layout;