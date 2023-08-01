import Link from "next/link";
import Image from 'next/image';

export default function Post({content}) {
    return (
        <div class="p-4 md:w-1/4 sm:mb-0 mb-6 bg-gray-100 rounded-lg">
            <div class="rounded-lg h-64 overflow-hidden">
                <Image
                    alt="content"
                    class="object-cover object-center h-full w-full"
                    src={content.image}
                    width={500}
                    height={500}
                    loading='lazy'
                />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">{content.title}</h2>
            <p class="text-base leading-relaxed mt-2 text-clip">{content.title}</p>
            <a class="text-indigo-500 inline-flex items-center mt-3"><Link href={'/blogs/' + content.slug}>Read More</Link>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    );
}