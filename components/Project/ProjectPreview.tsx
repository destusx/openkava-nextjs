import Image from 'next/image';
import { Link } from '../../navigation';
import { getProjects } from '@/services/projectService';
import { getImagePath } from '@/utils/getPathImage';

const ProjectPreview = async () => {
    const projects = await getProjects();

    return projects.map((project, i) => {
        console.log(project);
        const imageUrl = getImagePath(project.image.filename);

        return (
            <div key={project.id}>
                <Link
                    href={`/projects/${project.slug}`}
                    className="rounded-custom overflow-hidden block"
                >
                    <div className="relative w-full h-[250px] hover:scale-110 transition ease-linear">
                        <Image
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            fill
                            className="rounded-custom object-cover"
                            src={imageUrl}
                            alt={project.title}
                            priority={i === 0 ? true : false}
                        />
                    </div>
                </Link>
                <Link href={`/projects/${project.slug}`}>
                    <h3 className="mt-3">{project.title}</h3>
                </Link>
                <p className="mt-3 text-gray-600">
                    Поможем открыть кофейню, повысим шансы на успех бизнеса в
                    несколько раз, поделимся ценным опытом.
                </p>
            </div>
        );
    });
};

export default ProjectPreview;
