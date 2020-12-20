import { FC } from 'react'
import NextLink from 'next/link'

export const Logo: FC<{ className: string }> = ({ className }) => (
    <NextLink href={'/'}>
        <a>
            <svg
                className={className}
                width="240"
                height="240"
                viewBox="0 0 240 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M120 220.8C175.67 220.8 220.8 175.67 220.8 120C220.8 64.3297 175.67 19.2 120 19.2C64.3297 19.2 19.2 64.3297 19.2 120C19.2 175.67 64.3297 220.8 120 220.8ZM120 240C186.274 240 240 186.274 240 120C240 53.7258 186.274 0 120 0C53.7258 0 0 53.7258 0 120C0 186.274 53.7258 240 120 240Z"
                    fill="black"
                />
                <path
                    d="M37.725 137.363H61.6125V146.4H26.475V91.8H37.725V137.363Z"
                    fill="black"
                />
                <path
                    d="M110.55 120.338C110.55 125.713 109.6 130.425 107.7 134.475C105.8 138.525 103.075 141.65 99.525 143.85C96 146.05 91.95 147.15 87.375 147.15C82.85 147.15 78.8125 146.062 75.2625 143.888C71.7125 141.713 68.9625 138.613 67.0125 134.588C65.0625 130.538 64.075 125.888 64.05 120.638V117.938C64.05 112.563 65.0125 107.838 66.9375 103.763C68.8875 99.6625 71.625 96.525 75.15 94.35C78.7 92.15 82.75 91.05 87.3 91.05C91.85 91.05 95.8875 92.15 99.4125 94.35C102.963 96.525 105.7 99.6625 107.625 103.763C109.575 107.838 110.55 112.55 110.55 117.9V120.338ZM99.15 117.863C99.15 112.138 98.125 107.788 96.075 104.813C94.025 101.838 91.1 100.35 87.3 100.35C83.525 100.35 80.6125 101.825 78.5625 104.775C76.5125 107.7 75.475 112 75.45 117.675V120.338C75.45 125.913 76.475 130.238 78.525 133.312C80.575 136.388 83.525 137.925 87.375 137.925C91.15 137.925 94.05 136.45 96.075 133.5C98.1 130.525 99.125 126.2 99.15 120.525V117.863Z"
                    fill="black"
                />
                <path
                    d="M161.925 139.5C159.9 141.925 157.038 143.812 153.338 145.163C149.638 146.488 145.538 147.15 141.038 147.15C136.312 147.15 132.163 146.125 128.588 144.075C125.038 142 122.288 139 120.338 135.075C118.413 131.15 117.425 126.538 117.375 121.238V117.525C117.375 112.075 118.288 107.363 120.113 103.388C121.963 99.3875 124.613 96.3375 128.062 94.2375C131.538 92.1125 135.6 91.05 140.25 91.05C146.725 91.05 151.788 92.6 155.438 95.7C159.088 98.775 161.25 103.263 161.925 109.163H150.975C150.475 106.038 149.363 103.75 147.638 102.3C145.938 100.85 143.588 100.125 140.588 100.125C136.763 100.125 133.85 101.563 131.85 104.438C129.85 107.313 128.838 111.588 128.812 117.263V120.75C128.812 126.475 129.9 130.8 132.075 133.725C134.25 136.65 137.438 138.113 141.638 138.113C145.863 138.113 148.875 137.213 150.675 135.413V126H140.438V117.713H161.925V139.5Z"
                    fill="black"
                />
                <path
                    d="M215.925 120.338C215.925 125.713 214.975 130.425 213.075 134.475C211.175 138.525 208.45 141.65 204.9 143.85C201.375 146.05 197.325 147.15 192.75 147.15C188.225 147.15 184.188 146.062 180.638 143.888C177.088 141.713 174.338 138.613 172.388 134.588C170.438 130.538 169.45 125.888 169.425 120.638V117.938C169.425 112.563 170.388 107.838 172.312 103.763C174.263 99.6625 177 96.525 180.525 94.35C184.075 92.15 188.125 91.05 192.675 91.05C197.225 91.05 201.263 92.15 204.788 94.35C208.338 96.525 211.075 99.6625 213 103.763C214.95 107.838 215.925 112.55 215.925 117.9V120.338ZM204.525 117.863C204.525 112.138 203.5 107.788 201.45 104.813C199.4 101.838 196.475 100.35 192.675 100.35C188.9 100.35 185.988 101.825 183.938 104.775C181.888 107.7 180.85 112 180.825 117.675V120.338C180.825 125.913 181.85 130.238 183.9 133.312C185.95 136.388 188.9 137.925 192.75 137.925C196.525 137.925 199.425 136.45 201.45 133.5C203.475 130.525 204.5 126.2 204.525 120.525V117.863Z"
                    fill="black"
                />
            </svg>
        </a>
    </NextLink>
)
