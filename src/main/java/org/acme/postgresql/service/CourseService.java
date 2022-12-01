package org.acme.postgresql.service;

import org.acme.postgresql.models.Course;

public class CourseService {
    
    public Course findCourseById(int courseId) {
        return Course.findById(courseId);
    }

    public Course saveCourse(Course course) {
        course.persist();
        return course;
    }

    public Course updateCourse(int courseId, Course course) {
        Course currentCourse = findCourseById(courseId);
        if (currentCourse == null) {
            return null;    
        }
        
        return currentCourse;
    }
}
