export default function Footer() {
    return (
        <footer className="sticky text-center text-xs sm:text-sm text-gray-500 px-2 py-2 w-full bg-white border-t mt-auto">
            &copy; {new Date().getFullYear()} ABC Bank. All rights reserved.
        </footer>
    );
}