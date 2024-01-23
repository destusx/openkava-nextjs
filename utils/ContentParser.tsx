import Image from 'next/image';
import parse, { HTMLReactParserOptions, domToReact } from 'html-react-parser';
import { DOMNode } from 'html-react-parser/lib/dom-to-react';
import { IPost } from '@/types/post.types';
import { IProject } from '@/types/project.types';
import { BiSolidCoffeeBean } from 'react-icons/bi';

function ContentParser(content: IPost | IProject) {
    const options: HTMLReactParserOptions = {
        replace: (domNode: DOMNode) => {
            if (domNode.name === 'img') {
                const { src, alt, height, width } = domNode.attribs;

                return (
                    <div className="flex flex-col mb-3">
                        <Image
                            alt={alt}
                            src={src}
                            sizes="100vw"
                            className="w-full h-auto rounded-custom"
                            height={parseInt(height, 10)}
                            width={parseInt(width, 10)}
                        />
                    </div>
                );
            }

            if (domNode.name === 'a') {
                domNode.attribs.className = `text-base-color`;
                return domNode.attribs;
            }

            if (domNode.name === 'ul') {
                domNode.attribs.className = `list-none mt-2 pl-2`;
                return domNode.attribs;
            }

            if (domNode.name === 'p') {
                domNode.attribs.className = 'leading-8';
                return domNode.attribs;
            }

            if (
                domNode.name === 'li' &&
                domNode.parent &&
                domNode.parent.name === 'ul'
            ) {
                // Ищем первый дочерний элемент типа 'p'
                const paragraph = domNode.children.find(
                    (child: { name: string }) => child.name === 'p'
                );
                if (paragraph) {
                    return (
                        <li className="relative pl-6">
                            <div
                                style={{
                                    color: '#818cf8',
                                    fontSize: '1rem',
                                    position: 'absolute',
                                    top: '6px',
                                    left: '0',
                                }}
                            >
                                <BiSolidCoffeeBean />
                            </div>
                            <p className="pl-4 my-2">
                                {parse(paragraph.children[0].data, options)}
                            </p>
                        </li>
                    );
                }
            }
        },
    };

    const parsedContent = parse(content.content, options);

    return parsedContent;
}

export default ContentParser;
