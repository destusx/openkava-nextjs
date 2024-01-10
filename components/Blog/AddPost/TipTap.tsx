'use client';
import { Color } from '@tiptap/extension-color';
import Code from '@tiptap/extension-code';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import Placeholder from '@tiptap/extension-placeholder';
import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import MenuBar from './MenuBar';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import Link from '@tiptap/extension-link';
import { useEffect } from 'react';

type TiptapProps = {
    content: string;
    setContent: (content: string) => void;
};

const CustomImage = Image.extend({
    addAttributes() {
        return {
            src: {
                default: null,
            },
            width: {
                default: null,
            },
            height: {
                default: null,
            },
            alt: {
                default: null,
            },
            title: {
                default: null,
            },
            class: {
                default: null,
            },
            srcset: {
                default: null,
            },
            sizes: {
                default: null,
            },
            loading: {
                default: null,
            },
        };
    },
});

const Tiptap = (props: TiptapProps) => {
    const { content, setContent } = props;

    const editor = useEditor({
        extensions: [
            Color.configure({ types: [TextStyle.name, ListItem.name] }),
            TextStyle.configure({ types: [ListItem.name] } as any),
            Placeholder.configure({
                placeholder: 'Write something …',
                emptyNodeClass:
                    'first:before:text-gray-400 first:before:float-left first:before:content-[attr(data-placeholder)] first:before:pointer-events-none',
            }),
            Underline.configure({
                HTMLAttributes: {
                    class: 'my-custom-class',
                },
            }),
            Link.configure({
                HTMLAttributes: {
                    target: true,
                },
            }),
            CustomImage,
            StarterKit.configure({
                bulletList: {
                    keepMarks: true,
                    keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
                },
                orderedList: {
                    keepMarks: true,
                    keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
                },
            }),
            Code,
            Highlight,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Table.configure({
                resizable: true,
            }),
            TableRow,
            TableHeader,
            TableCell,
        ],
        content: content,
        onUpdate({ editor }) {
            setContent(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
            },
        },
    });

    useEffect(() => {
        // Обновляем content, когда post изменяется
        editor?.chain().setContent(content).run();
    }, [content, editor]);

    return (
        <div className="w-full border-black border-4 rounded-2xl overflow-hidden">
            <MenuBar editor={editor} />
            <div className="w-full p-3 max-h-[600px] overflow-auto">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
};

export default Tiptap;
