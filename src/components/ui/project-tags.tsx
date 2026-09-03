import React from "react";

const CARD_LIMIT = 4;

interface ProjectTagsProps {
  tags?: string[];
  /** Cards cap the list so long stacks do not swamp the description. */
  limit?: number;
}

const ProjectTags = ({ tags, limit = CARD_LIMIT }: ProjectTagsProps) => {
  if (!tags || tags.length === 0) return null;

  const shown = tags.slice(0, limit);
  const extra = tags.length - shown.length;

  return (
    <div className="mt-4 flex flex-wrap gap-1.5">
      {shown.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600"
        >
          {tag}
        </span>
      ))}
      {extra > 0 && (
        <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-500">
          +{extra}
        </span>
      )}
    </div>
  );
};

export default ProjectTags;
