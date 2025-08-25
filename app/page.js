import fs from 'fs/promises';
import path from 'path';
import ProjectCard from '@/components/ProjectCard'; // 使用了别名 @ 指向根目录

export default async function HomePage() {
  // 1. 从文件系统读取 JSON 数据
  // process.cwd() 获取当前工作目录的根
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const projects = JSON.parse(jsonData);

  return (
      <main className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              我的 AI 项目作品集
            </h1>
            <p className="text-lg text-gray-400">
              探索我使用前沿技术构建的AI应用
            </p>
          </header>

          {/* 2. 项目网格布局 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <footer className="text-center mt-20 py-8 border-t border-gray-800">
            <p className="text-gray-500">&copy; {new Date().getFullYear()} [lcslearn.top]. All Rights Reserved.</p>
          </footer>
        </div>
      </main>
  );
}