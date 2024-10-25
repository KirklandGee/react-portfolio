'use client'

import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import Image from 'next/image'

interface SkillNode extends d3.SimulationNodeDatum {
  id: string;
  group: GroupNumber;
}

interface SkillLink {
  source: string | SkillNode;
  target: string | SkillNode;
  value: number;
}

interface Data {
  nodes: SkillNode[];
  links: SkillLink[];
}

type GroupNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10; // Assuming these are all possible group numbers

const skills: SkillNode[] = [
  // SEO & Content (group: 1, 4)
  { id: 'SEO & Content', group: 4 },
  { id: 'Technical SEO', group: 1 },
  { id: 'eCommerce SEO', group: 1 },
  { id: 'Programmatic SEO', group: 1 },
  { id: 'Entity SEO', group: 1 },
  { id: 'Content Strategy', group: 1 },
  { id: 'Keyword Research', group: 1 },
  { id: 'On-Page SEO', group: 1 },
  { id: 'Off-Page SEO', group: 1 },
  { id: 'Local SEO', group: 1 },
  { id: 'SEO Auditing', group: 1 },
  
  // Data & Analytics (group: 2, 5)
  { id: 'Data & Analytics', group: 5 },
  { id: 'BigQuery', group: 2 },
  { id: 'Data Visualization', group: 2 },
  { id: 'SQL', group: 2 },
  { id: 'Google Analytics', group: 2 },
  { id: 'Google Search Console', group: 2 },
  { id: 'Jupyter Notebooks', group: 2 },
  { id: 'Tableau', group: 2 },
  { id: 'PostgreSQL', group: 2 },
  { id: 'Data Mining', group: 2 },
  { id: 'A/B Testing', group: 2 },
  { id: 'Statistical Analysis', group: 2 },
  
  // Programming & Development (group: 3, 6)
  { id: 'Programming & Development', group: 6 },
  { id: 'Python', group: 3 },
  { id: 'JavaScript', group: 3 },
  { id: 'React', group: 3 },
  { id: 'Backend Development', group: 3 },
  { id: 'API Development', group: 3 },
  { id: 'CI/CD', group: 3 },
  { id: 'Version Control', group: 3 },
  { id: 'AI', group: 3 },
  { id: 'Machine Learning', group: 3 },
  { id: 'Natural Language Processing', group: 3 },
  { id: 'AWS', group: 3 },
  { id: 'Vercel', group: 3 },
  { id: 'Node.js', group: 3 },
  { id: 'TypeScript', group: 3 },
  { id: 'GraphQL', group: 3 },
  
  // Web Performance (group: 7, 8)
  { id: 'Web Performance', group: 8 },
  { id: 'Page Speed Optimization', group: 7 },
  { id: 'Core Web Vitals', group: 7 },
  { id: 'Caching Strategies', group: 7 },
  { id: 'CDN Implementation', group: 7 },
  { id: 'Lazy Loading', group: 7 },
  
  // Digital Marketing (group: 9, 10)
  { id: 'Digital Marketing', group: 10 },
  { id: 'PPC Advertising', group: 9 },
  { id: 'Social Media Marketing', group: 9 },
  { id: 'Email Marketing', group: 9 },
  { id: 'Conversion Rate Optimization', group: 9 },
  { id: 'Marketing Automation', group: 9 }
]

const links: SkillLink[] = [
  // SEO & Content links
  { source: 'SEO & Content', target: 'Programmatic SEO', value: 1 },
  { source: 'SEO & Content', target: 'Entity SEO', value: 1 },
  { source: 'SEO & Content', target: 'Content Strategy', value: 1 },
  { source: 'SEO & Content', target: 'Keyword Research', value: 1 },
  { source: 'SEO & Content', target: 'eCommerce SEO', value: 1 },
  { source: 'SEO & Content', target: 'Technical SEO', value: 1 },
  { source: 'SEO & Content', target: 'On-Page SEO', value: 1 },
  { source: 'SEO & Content', target: 'Off-Page SEO', value: 1 },
  { source: 'SEO & Content', target: 'Local SEO', value: 1 },
  { source: 'SEO & Content', target: 'SEO Auditing', value: 1 },

  // Data & Analytics links
  { source: 'Data & Analytics', target: 'BigQuery', value: 1 },
  { source: 'Data & Analytics', target: 'Data Visualization', value: 1 },
  { source: 'Data & Analytics', target: 'Google Search Console', value: 1 },
  { source: 'Data & Analytics', target: 'SQL', value: 1 },
  { source: 'Data & Analytics', target: 'Google Analytics', value: 1 },
  { source: 'Data & Analytics', target: 'PostgreSQL', value: 1 },
  { source: 'Data & Analytics', target: 'Tableau', value: 1 },
  { source: 'Data & Analytics', target: 'Jupyter Notebooks', value: 1 },
  { source: 'Data & Analytics', target: 'Data Mining', value: 1 },
  { source: 'Data & Analytics', target: 'A/B Testing', value: 1 },
  { source: 'Data & Analytics', target: 'Statistical Analysis', value: 1 },
  
  // Programming & Development links
  { source: 'Programming & Development', target: 'Backend Development', value: 1 },
  { source: 'Programming & Development', target: 'React', value: 1 },
  { source: 'Programming & Development', target: 'API Development', value: 1 },
  { source: 'Programming & Development', target: 'Version Control', value: 1 },
  { source: 'Programming & Development', target: 'JavaScript', value: 1 },
  { source: 'Programming & Development', target: 'Python', value: 1 },
  { source: 'Programming & Development', target: 'CI/CD', value: 1 },
  { source: 'Programming & Development', target: 'Machine Learning', value: 1 },
  { source: 'Programming & Development', target: 'Natural Language Processing', value: 1 },
  { source: 'Programming & Development', target: 'AWS', value: 1 },
  { source: 'Programming & Development', target: 'AI', value: 1 },
  { source: 'Programming & Development', target: 'Vercel', value: 1 },
  { source: 'Programming & Development', target: 'Node.js', value: 1 },
  { source: 'Programming & Development', target: 'TypeScript', value: 1 },
  { source: 'Programming & Development', target: 'GraphQL', value: 1 },

  // Web Performance links
  { source: 'Web Performance', target: 'Page Speed Optimization', value: 1 },
  { source: 'Web Performance', target: 'Core Web Vitals', value: 1 },
  { source: 'Web Performance', target: 'Caching Strategies', value: 1 },
  { source: 'Web Performance', target: 'CDN Implementation', value: 1 },
  { source: 'Web Performance', target: 'Lazy Loading', value: 1 },

  // Digital Marketing links
  { source: 'Digital Marketing', target: 'PPC Advertising', value: 1 },
  { source: 'Digital Marketing', target: 'Social Media Marketing', value: 1 },
  { source: 'Digital Marketing', target: 'Email Marketing', value: 1 },
  { source: 'Digital Marketing', target: 'Conversion Rate Optimization', value: 1 },
  { source: 'Digital Marketing', target: 'Marketing Automation', value: 1 },

  // Cross-cluster links
  { source: 'SEO & Content', target: 'Data & Analytics', value: 2 },
  { source: 'SEO & Content', target: 'Web Performance', value: 2 },
  { source: 'Data & Analytics', target: 'Programming & Development', value: 2 },
  { source: 'Programming & Development', target: 'Web Performance', value: 2 },
  { source: 'Digital Marketing', target: 'SEO & Content', value: 2 },
  { source: 'Digital Marketing', target: 'Data & Analytics', value: 2 }
]

const data: Data = { nodes: skills, links: links }

function dragstarted(event: d3.D3DragEvent<SVGCircleElement, SkillNode, SkillNode>, simulation: d3.Simulation<SkillNode, undefined>) {
  if (!event.active) simulation.alphaTarget(0.3).restart();
  event.subject.fx = event.subject.x;
  event.subject.fy = event.subject.y;
}

function dragged(event: d3.D3DragEvent<SVGCircleElement, SkillNode, SkillNode>) {
  event.subject.fx = event.x;
  event.subject.fy = event.y;
}

function dragended(event: d3.D3DragEvent<SVGCircleElement, SkillNode, SkillNode>, simulation: d3.Simulation<SkillNode, undefined>) {
  if (!event.active) simulation.alphaTarget(0);
  event.subject.fx = null;
  event.subject.fy = null;
}

export default function ForceGraph() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (svgRef.current) {
      d3.select(svgRef.current).selectAll("*").remove();
      const width = 928;
      const height = 680;

      const color = d3.scaleOrdinal(d3.schemeCategory10);

      const nodes = data.nodes.map(d => ({...d}));
      const nodeById = new Map(nodes.map(node => [node.id, node]));
      const links = data.links.map(d => ({
        ...d,
        source: nodeById.get(d.source as string) || d.source,
        target: nodeById.get(d.target as string) || d.target
      })); 

      const simulation = d3.forceSimulation(nodes)
          .force("link", d3.forceLink<SkillNode, SkillLink>(links).id(d => d.id).distance(150))
          .force("charge", d3.forceManyBody().strength(-400))
          .force("collide", d3.forceCollide().radius(20))
          .force("x", d3.forceX())
          .force("y", d3.forceY());

      const svg = d3.select(svgRef.current)
          .attr("viewBox", [-width / 2, -height / 2, width, height])
          .attr("style", "max-width: 100%; height: auto;");

      const link = svg.append("g")
          .attr("stroke", "#999")
          .attr("stroke-opacity", 0.6)
        .selectAll("line")
        .data(links)
        .join("line")
          .attr("stroke-width", d => Math.sqrt(d.value));

      const nodeGroup = svg.append("g")
        .selectAll<SVGGElement, SkillNode>("g")
        .data(nodes)
        .join("g")
          .call(d3.drag<SVGGElement, SkillNode>()
            .on("start", event => dragstarted(event, simulation))
            .on("drag", event => dragged(event))
            .on("end", event => dragended(event, simulation))
          );

      nodeGroup.append("circle")
          .attr("r", d => [4, 5, 6, 8, 10].includes(d.group) ? 10 : 5)
          .attr("fill", d => color(d.group.toString()));

      nodeGroup.append("text")
          .attr("dx", d => [4, 5, 6, 8, 10].includes(d.group) ? 15 : 10)
          .attr("dy", ".35em")
          .text(d => d.id)
          .style("font-size", d => [4, 5, 6, 8, 10].includes(d.group) ? "14px" : "12px")
          .style("font-weight", d => [4, 5, 6, 8, 10].includes(d.group) ? "bold" : "normal")
          .style("fill", "f5f1edff");

      simulation.on("tick", () => {
        link
            .attr("x1", d => (d.source as unknown as SkillNode).x!)
            .attr("y1", d => (d.source as unknown as SkillNode).y!)
            .attr("x2", d => (d.target as unknown as SkillNode).x!)
            .attr("y2", d => (d.target as unknown as SkillNode).y!);

        nodeGroup
            .attr("transform", d => `translate(${d.x},${d.y})`);
      });

      return () => {
        simulation.stop();
      };
    }
  }, [])


return (
  <section id="skills" className="py-16">
    <h2 className="text-4xl font-florent mb-4 text-center">What I Do</h2>
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col col-span-1">
          <div className="flex flex-row items-center align-center overflow-hidden mb-4 border-2 border-foreground rounded-xl bg-background">
            <div className="flex items-center">
              <h3 className="text-4xl font-florent mb-0 mr-4 text-foreground text-center flex-grow">Kirkland Gee</h3>
              <Image src="/images/kirkland_headshot.jpeg" alt="Kirkland Gee" width={100} height={100} className="flex-shrink-0" />
            </div>
          </div>
          <p className="text-md text-foreground p-6">
            Hey there! I&apos;m a Technical SEO Manager with nearly a decade of experience in digital marketing, with a priority focus on Organic Search.<br /><br />
            I&apos;m passionate about helping people understand SEO and make use of it to grow their businesses. <br /><br />
            Over the last few years, I&apos;ve grown increasingly fascinated with the intersection of AI, big data, and user experience, and I seek to marry those to drive real business outcomes.<br /><br />
            If you&apos;re trying to grow organic search traffic, but you find yourself blocked by technical issues or repetitive tasks that keep you from doing what you do best, I&apos;d love to chat.
          </p>
        </div>
        <div className="flex justify-center col-span-2">
          <svg ref={svgRef} className="dark:bg-foreground rounded-lg" width="928" height="auto" />
        </div>
      </div>
    </div>
  </section>
)
}