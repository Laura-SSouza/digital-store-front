import { Link } from "react-router"

const Section = ({ title, titleAlign = "left", link, children }) => {
  return (
    <section>
        <div className="flex items-center justify-between">
            <h2 className={`flex-1 text-[24px] text-dark-gray-2 ${titleAlign === "center" ? "text-center" : "text-left"}`}>
                {title}
            </h2>

            {link && (
                <Link to={link.href} className="text-primary text-[18px]">
                    {link.text}
                </Link>
            )}
        </div>
        {children}
    </section>
  )
}

export default Section